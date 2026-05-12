import { CV } from '../../../data/cv';
import { SecHead } from './SecHead';
import { IdCard } from './IdCard';

export function ContactSection() {
  return (
    <section className="t-section" data-hue="cyan">
      <SecHead
        num="03"
        marker="//"
        title="contact.sock"
        hint={<>open a <span className="acc">connection</span></>}
      />
      <div className="t-contact">
        <div className="t-contact-with-card">
          <IdCard />
          <div className="t-contact-grid">
            {CV.contacts.map((c) => (
              <a
                key={c.k}
                className="t-c-cell"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="k">{c.k}</span>
                <span className="v">{c.v}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
