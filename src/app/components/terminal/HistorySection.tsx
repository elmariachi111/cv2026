import { CV, type HistoryEntry } from '../../../data/cv';
import { SecHead } from './SecHead';

function HistoryRow({ h }: { h: HistoryEntry }) {
  return (
    <div className="t-history-row">
      <div className="t-when">
        <span className="yr">{h.from} → {h.to}</span>
        <span className="dur">{h.dur}</span>
      </div>

      <div>
        <div className="t-company">
          <div className="t-logo">{h.logo}</div>
          <div>
            <div className="t-co-name">{h.company}</div>
            <div className="t-co-role">{h.role}</div>
          </div>
        </div>
        <p className="t-desc">{h.desc}</p>
        <div className="t-tech">
          {h.tech.map((t) => (
            <span key={t} className="t-tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="t-screen">
        <div className="t-scr-bar">
          <span className="t-scr-d" />
          <span className="t-scr-d" />
          <span className="t-scr-d" />
          <span style={{ marginLeft: 6 }}>
            {h.company.toLowerCase().replace(/\s+/g, '-')}.png
          </span>
        </div>
        <div className="t-scr-body">
          <span className="t-scr-label">{h.label}</span>
        </div>
      </div>
    </div>
  );
}

export function HistorySection() {
  return (
    <section className="t-section">
      <SecHead
        marker="//"
        title="history.log"
        hint={`${CV.history.length} entries · descending`}
      />
      <div className="t-history">
        {CV.history.map((h, i) => (
          <HistoryRow key={i} h={h} />
        ))}
      </div>
    </section>
  );
}
