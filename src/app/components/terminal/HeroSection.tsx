import { CV } from '../../../data/cv';

export function HeroSection() {
  return (
    <section className="t-section t-hero-sec">
      <div className="t-hero-banner" aria-hidden="true">
        <img src="/desk-banner.png" alt="" />
      </div>
      <div className="t-hero">
        <div>
          <div className="t-prompt">
            <span className="who">{CV.handle}</span>
            <span style={{ color: 'var(--t-fg-dim)' }}>@</span>
            <span className="host">berlin</span>
            <span style={{ color: 'var(--t-fg-dim)' }}>:~$</span>
            <span className="cmd t-cursor"> whoami</span>
          </div>

          <h1>
            <span>Stefan </span><span className="accent">Adolf</span>
            <br />
            <span className="sub">// software engineer</span>
          </h1>

          <p className="t-tagline">
            Principal engineer with <span className="acc">two decades</span> of building
            production systems across web, backends, distributed protocols and on-chain
            infrastructure. Currently focused on{' '}
            <span className="amb">privacy-preserving compute</span>, agentic systems, and
            biomedical data.
          </p>

          <div className="t-roles">
            {CV.roles.map((r) => (
              <span className="t-role-tag" key={r}>
                <span className="pre">─</span>{r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
