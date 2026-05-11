/* global React, CV */
const { useState, useEffect, useRef } = React;

// ── Tweakable defaults ───────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#7dffaf",
  "scanlines": 0.6,
  "showVignette": true,
  "showAscii": true,
  "density": "comfy"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ['#7dffaf', '#d4a655', '#9bbcff', '#c46a9c', '#e5e5e2'];

// ── Helpers ──────────────────────────────────────────────────────────
function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function pad(n) { return String(n).padStart(2, '0'); }

function uptimeFrom(year) {
  const start = new Date(year, 0, 1);
  const diff = Date.now() - start.getTime();
  const yrs = diff / (1000 * 60 * 60 * 24 * 365.25);
  return yrs.toFixed(2);
}

const BIRTH_YEAR = 1978;
function ageNow() {
  return Math.floor(uptimeFrom(BIRTH_YEAR));
}

// ── ASCII logo (subtle) ──────────────────────────────────────────────
const ASCII = `   ██╗  ██╗ █████╗  ██████╗██╗  ██╗
   ██║  ██║██╔══██╗██╔════╝██║ ██╔╝
   ███████║███████║██║     █████╔╝ 
   ██╔══██║██╔══██║██║     ██╔═██╗ 
   ██║  ██║██║  ██║╚██████╗██║  ██╗
   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝`;

// ── Sections ─────────────────────────────────────────────────────────

function TopBar() {
  const t = useClock();
  const stamp = `${t.getFullYear()}-${pad(t.getMonth()+1)}-${pad(t.getDate())} ${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  return (
    <div className="topbar">
      <div className="dots">
        <span className="dot a"></span>
        <span className="dot b"></span>
        <span className="dot c"></span>
      </div>
      <span className="path">~ / cv / stefan-adolf.txt</span>
      <span className="spacer"></span>
      <span className="meta">tmux · zsh · {stamp}</span>
    </div>
  );
}

function Hero() {
  const t = useClock();
  const time = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  return (
    <section className="hero-sec">
      <div className="hero">
        <div>
          <div className="prompt">
            <span className="who">{CV.handle}</span><span className="dim">@</span><span className="host">berlin</span><span className="dim">:~$</span>
            <span className="cmd cursor"> whoami</span>
          </div>

          <h1>
            <span>{CV.name}</span>
            <br/>
            <span className="sub">// software engineer</span>
          </h1>

          <p className="tagline">{CV.blurb}</p>

          <div className="roles">
            {CV.roles.map((r, i) => (
              <span className="role-tag" key={r}>
                <span className="pre">─</span>{r}
              </span>
            ))}
          </div>
        </div>

        <aside className="neofetch">
          <div className="portrait">
            <image-slot id="cv-portrait" placeholder="drop photo" shape="rect"></image-slot>
          </div>
          {false && (
            <div className="ascii"></div>
          )}
          <Row k="user"   v={CV.handle} />
          <Row k="host"   v="berlin.de" />
          <Row k="role"   v="principal eng." />
          <Row k="shell"  v="zsh + tmux" />
          <hr/>
          <Row k="age"    v={`${ageNow()}y`} />
          <Row k="born"   v={`${BIRTH_YEAR}.01 · DE`} />
          <Row k="uptime" v={`${uptimeFrom(1998)} yrs coding`} />
          <Row k="status" v={<span className="acc">available</span>} />
          <Row k="clock"  v={time} />
        </aside>
      </div>
    </section>
  );
}
function Row({ k, v }) {
  return (
    <div className="row">
      <span className="k">{k}</span>
      <span className="v">{v}</span>
    </div>
  );
}

function NowStrip() {
  return (
    <div className="now-strip" style={{ borderTop: '1px solid var(--line)' }}>
      <span className="live">
        <span className="pulse"></span>
        currently shipping
      </span>
      <span className="lbl mute">·</span>
      {CV.now.map((p, i) => (
        <React.Fragment key={p.name}>
          <a className="proj" href={p.href} target="_blank" rel="noreferrer">
            <span className="dim">{p.role.toLowerCase()} </span>
            <span className="acc">→ {p.name}</span>
          </a>
          {i < CV.now.length - 1 && <span className="mute">·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section>
      <SecHead marker="//" title="skills.matrix" hint="proficiency × years" />
      <div className="skills">
        <div className="skills-grid">
          {CV.skills.map(cat => (
            <div className="skill-cat" key={cat.id}>
              <div className="cat-head">
                <span className="cat-accent"></span>
                <span className="cat-id">{cat.id}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.items.map(it => (
                  <div className="skill-row" key={it.name}>
                    <span className="name">{it.name}</span>
                    <span className="bar">
                      {Array.from({length:5}).map((_,i) => (
                        <span key={i} className={`seg ${i < it.level ? 'on' : ''}`}></span>
                      ))}
                      <span className="yrs">{it.yrs}y</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section>
      <SecHead marker="//" title="history.log" hint={`${CV.history.length} entries · descending`} />
      <div className="history">
        {CV.history.map((h, i) => (
          <HistoryRow key={i} h={h} idx={i} />
        ))}
      </div>
    </section>
  );
}

function HistoryRow({ h, idx }) {
  return (
    <div className="history-row">
      <div className="when">
        <span className="yr">{h.from} → {h.to}</span>
        <span className="dur">{h.dur}</span>
      </div>
      <div>
        <div className="company">
          <div className="logo">{h.logo}</div>
          <div>
            <div className="name">{h.company}</div>
            <div className="role">{h.role}</div>
          </div>
        </div>
        <p className="desc">{h.desc}</p>
        <div className="tech">
          {h.tech.map(t => <span key={t} className="t">{t}</span>)}
        </div>
      </div>
      <div className="screen">
        <div className="scr-bar">
          <span className="d"></span><span className="d"></span><span className="d"></span>
          <span style={{marginLeft:6}}>{h.company.toLowerCase().replace(/\s+/g,'-')}.png</span>
        </div>
        <div className="scr-body">
          <span className="label">{h.label}</span>
        </div>
      </div>
    </div>
  );
}

function Qualifications() {
  return (
    <section>
      <SecHead marker="//" title="qualifications.txt" hint="education · talks · awards" />
      <div className="quals">
        <div className="qual-block">
          <h4>// education & recognition</h4>
          <ul>
            {CV.education.map((e, i) => (
              <li key={i}>
                <span className="yr">{e.yr}</span>
                <span className="it">
                  <div className="ttl">{e.ttl}</div>
                  <div className="where">{e.where}</div>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="qual-block">
          <h4>// speaking & community</h4>
          <ul>
            {CV.speaking.map((e, i) => (
              <li key={i}>
                <span className="yr">{e.yr}</span>
                <span className="it">
                  <div className="ttl">{e.ttl}</div>
                  <div className="where">{e.where}</div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <SecHead marker="//" title="contact.sock" hint="open a connection" />
      <div className="contact">
        <div className="contact-grid">
          {CV.contacts.map(c => (
            <a className="c-cell" key={c.k} href={c.href} target="_blank" rel="noreferrer">
              <span className="k">{c.k}</span>
              <span className="v">{c.v}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Foot() {
  const t = useClock();
  return (
    <div className="foot">
      <span className="left">$ exit 0 · session length {(uptimeFrom(1998))}y · born {BIRTH_YEAR}</span>
      <span className="right">© 2026 · {CV.handle} · the struggle is real</span>
    </div>
  );
}

function SecHead({ marker, title, hint }) {
  return (
    <div className="sec-head">
      <span className="marker">{marker}</span>
      <span className="title">{title}</span>
      <span className="hint">{hint}</span>
    </div>
  );
}

// ── Tweaks ───────────────────────────────────────────────────────────
function Tweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent">
        <TweakColor value={t.accent} options={ACCENT_OPTIONS} onChange={v => setTweak('accent', v)} />
      </TweakSection>
      <TweakSection title="Effects">
        <TweakSlider label="Scanline opacity" min={0} max={1} step={0.05} value={t.scanlines} onChange={v => setTweak('scanlines', v)} />
        <TweakToggle label="Vignette" value={t.showVignette} onChange={v => setTweak('showVignette', v)} />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakRadio
          label="Density"
          value={t.density}
          options={[{value:'tight',label:'Tight'},{value:'comfy',label:'Comfy'}]}
          onChange={v => setTweak('density', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// ── Root ─────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--scan-opacity', t.scanlines);
    // accent-dim auto-derived (mix with bg)
    document.documentElement.style.setProperty('--accent-dim', t.accent + '99');
    window.__tweaks = t;
  }, [t.accent, t.scanlines, t.showAscii]);

  const padScale = t.density === 'tight' ? '0.78' : '1';
  return (
    <>
      {t.scanlines > 0 && <div className="scanlines" style={{opacity: t.scanlines * 0.6}}></div>}
      {t.showVignette && <div className="vignette"></div>}
      <div className="cv" style={{
        '--pad-scale': padScale,
      }}>
        <TopBar />
        <Hero />
        <NowStrip />
        <Skills />
        <History />
        <Qualifications />
        <Contact />
        <Foot />
      </div>
      <Tweaks t={t} setTweak={setTweak} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
