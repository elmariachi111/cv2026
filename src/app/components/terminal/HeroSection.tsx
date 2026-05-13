import { CV } from "../../../data/cv";

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
            <span style={{ color: "var(--t-fg-dim)" }}>@</span>
            <span className="host">berlin</span>
            <span style={{ color: "var(--t-fg-dim)" }}>:~$</span>
            <span className="cmd t-cursor"> whoami</span>
          </div>

          <h1>
            <span>Stefan Adolf</span>
            <br />
            <span className="sub">// make it work engineer</span>
          </h1>

          <p className="t-tagline">
            principal engineer with two decades experience of shipping
            production systems across web, apps, apis, distributed protocols and
            on-chain infrastructure. Currently focused on{" "}
            <span className="amb">privacy-preserving compute</span>,{" "}
            <span className="acc">agentic system ops</span>, and biomedical research on DeSci rails.
          </p>

          <div className="t-roles">
            {CV.roles.map((r) => (
              <span className="t-role-tag" key={r}>
                <span className="pre">─</span>
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
