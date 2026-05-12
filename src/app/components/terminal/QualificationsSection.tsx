import { CV, type QualEntry } from '../../../data/cv';
import { SecHead } from './SecHead';

function QualList({ items }: { items: QualEntry[] }) {
  return (
    <ul>
      {items.map((e, i) => (
        <li key={i}>
          <span className="t-qual-yr">{e.yr}</span>
          <span>
            <div className="t-qual-ttl">{e.ttl}</div>
            <div className="t-qual-where">{e.where}</div>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function QualificationsSection() {
  return (
    <section className="t-section" data-hue="magenta">
      <SecHead
        num="02"
        marker="//"
        title="qualifications.txt"
        hint={<>education · talks · <span className="acc">awards</span></>}
      />
      <div className="t-quals">
        <div className="t-qual-block">
          <h4><span className="acc">//</span> education & recognition</h4>
          <QualList items={CV.education} />
        </div>
        <div className="t-qual-block">
          <h4><span className="acc">//</span> speaking & community</h4>
          <QualList items={CV.speaking} />
        </div>
      </div>
    </section>
  );
}
