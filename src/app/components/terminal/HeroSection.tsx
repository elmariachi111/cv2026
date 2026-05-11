import { CV } from '../../../data/cv';
import { useClock, pad, ageNow, uptimeFrom, BIRTH_YEAR, CODING_SINCE } from './hooks';

function NeoRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="t-neo-row">
      <span className="k">{k}</span>
      <span className="v">{v}</span>
    </div>
  );
}

export function HeroSection() {
  const t = useClock();
  const time = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;

  return (
    <section className="t-section">
      <div className="t-hero">
        {/* Left: headline */}
        <div>
          <div className="t-prompt">
            <span className="who">{CV.handle}</span>
            <span style={{ color: 'var(--t-fg-dim)' }}>@</span>
            <span className="host">berlin</span>
            <span style={{ color: 'var(--t-fg-dim)' }}>:~$</span>
            <span className="cmd t-cursor"> whoami</span>
          </div>

          <h1>
            <span>{CV.name}</span>
            <br />
            <span className="sub">// software engineer</span>
          </h1>

          <p className="t-tagline">{CV.blurb}</p>

          <div className="t-roles">
            {CV.roles.map((r) => (
              <span className="t-role-tag" key={r}>
                <span className="pre">─</span>{r}
              </span>
            ))}
          </div>
        </div>

        {/* Right: neofetch panel */}
        <aside className="t-neofetch">
          <div className="portrait" data-filename="portrait.jpg">
            <span className="portrait-placeholder">[ drop photo ]</span>
          </div>
          <NeoRow k="user"   v={CV.handle} />
          <NeoRow k="host"   v="berlin.de" />
          <NeoRow k="role"   v="principal eng." />
          <NeoRow k="shell"  v="zsh + tmux" />
          <hr />
          <NeoRow k="age"    v={`${ageNow()}y`} />
          <NeoRow k="born"   v={`${BIRTH_YEAR}.01 · DE`} />
          <NeoRow k="uptime" v={`${uptimeFrom(CODING_SINCE)} yrs coding`} />
          <NeoRow k="status" v={<span style={{ color: 'var(--t-accent)' }}>available</span>} />
          <NeoRow k="clock"  v={time} />
        </aside>
      </div>
    </section>
  );
}
