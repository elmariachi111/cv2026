import { CV, type HistoryEntry } from '../../../data/cv';
import { SecHead } from './SecHead';

const HISTORY_HUES = ['green', 'green', 'amber', 'cyan', 'magenta', 'violet', 'amber', 'cyan', 'magenta', 'cyan'] as const;

function HistoryRow({ h, idx }: { h: HistoryEntry; idx: number }) {
  const hue = HISTORY_HUES[idx] ?? 'green';
  const era = h.from.length === 4 ? `'${h.from.slice(2)}` : h.from;
  return (
    <div className="t-history-row" data-hue={hue} data-era={era}>
      <div className="t-when">
        <span className="yr">{h.from} → {h.to}</span>
        
        {idx === 0 ? <span className="badge">CURRENT</span> : <span className="dur">{h.dur}</span>}
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
          {h.image
            ? <img src={h.image} alt={h.label} className="t-scr-img" style={h.imagePosition ? { objectPosition: h.imagePosition } : undefined} />
            : <span className="t-scr-label">{h.label}</span>
          }
        </div>
      </div>
    </div>
  );
}

export function HistorySection() {
  return (
    <section className="t-section" data-hue="amber">
      <SecHead
        num="01"
        marker="//"
        title="history.log"
        hint={<><span className="acc">{CV.history.length}</span> entries · descending</>}
      />
      <div className="t-history">
        {CV.history.map((h, i) => (
          <HistoryRow key={i} h={h} idx={i} />
        ))}
      </div>
    </section>
  );
}
