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
            <span className="sub">// protocol & agent systems engineer</span>
          </h1>

          <p className="t-tagline">
            twenty years of shipping production systems across web, apps, apis,{" "}
            <span className="acc">distributed protocols</span> and on-chain
            infrastructure. Now building agent orchestration & on-chain
            settlement for scientific research and agent-run climate media —{" "}
            <span className="amb">moving into energy-systems software</span>.
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
