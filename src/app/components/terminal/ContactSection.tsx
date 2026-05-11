import { CV } from '../../../data/cv';
import { SecHead } from './SecHead';

export function ContactSection() {
  return (
    <section className="t-section">
      <SecHead marker="//" title="contact.sock" hint="open a connection" />
      <div className="t-contact">
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
    </section>
  );
}
