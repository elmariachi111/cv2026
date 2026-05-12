import { CV } from '../../../data/cv';

export function HeroSection() {
  return (
    <section className="t-section t-hero-sec">
      <div className="t-hero-banner" aria-hidden="true">
        <img src="/assets/desci2.png" alt="" />
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
            <span >Stefan Adolf</span>
            <br />
            <span className="sub">// cto in residence</span>
          </h1>

          <p className="t-tagline">
            Principal engineer with two decades experience of building
            production systems across web, backends, distributed protocols and on-chain
            infrastructure. Currently focused on{' '}
            <span className="amb">privacy-preserving compute</span>, <span className="acc">agentic system ops</span>, and
            biomedical data utilization.
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
