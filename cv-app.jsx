/* global React, CV */
const { useState, useEffect, useRef } = React;

// ── Tweakable defaults ───────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#7dffaf",
  "scanlines": 0.4,
  "showVignette": true,
  "showAscii": true,
  "showAmbient": true,
  "glow": 1,
  "density": "comfy"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ['#7dffaf', '#d4a655', '#7ec8e3', '#c46a9c', '#9b8cff'];

// ── Values (compact strip) ───────────────────────────────────────────
const VALUES = [
  { hue: 'var(--accent)',  txt: 'cypherpunk' },
  { hue: 'var(--magenta)', txt: 'privacy' },
  { hue: 'var(--amber)',   txt: 'decentralization' },
  { hue: 'var(--cyan)',    txt: 'permissionless' },
  { hue: 'var(--violet)',  txt: 'built-to-last' },
  { hue: 'var(--accent)',  txt: 'empathy' },
];

// ── Per-history hue assignment (era-coded) ───────────────────────────
const HISTORY_HUES = ['green','green','amber','cyan','magenta','violet','amber','magenta','cyan'];
const SKILL_HUES   = ['green','cyan','magenta','amber','violet','green'];

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
const ASCII = [
  '   ██╗  ██╗ █████╗  ██████╗██╗  ██╗',
  '   ██║  ██║██╔══██╗██╔════╝██║ ██╔╝',
  '   ███████║███████║██║     █████╔╝ ',
  '   ██╔══██║██╔══██║██║     ██╔═██╗ ',
  '   ██║  ██║██║  ██║╚██████╗██║  ██╗',
  '   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝',
].join('\n');

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
      <span className="path">
        <span className="seg">~</span> / <span className="seg">cv</span> / <span className="file">stefan-adolf.txt</span>
      </span>
      <span className="spacer"></span>
      <span className="meta"><span className="acc">●</span> tmux<span className="sep">·</span>zsh<span className="sep">·</span>{stamp}</span>
    </div>
  );
}

function Hero() {
  const t = useClock();
  const time = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  return (
    <section className="hero-sec">
      <div className="hero-banner" aria-hidden="true">
        <img src="assets/desk-banner.png" alt="" />
      </div>
      <div className="hero hero-solo">
        <div>
          <div className="prompt">
            <span className="who">{CV.handle}</span><span className="dim">@</span><span className="host">berlin</span><span className="dim">:~$</span>
            <span className="cmd cursor"> whoami</span>
          </div>

          <h1>
            <span>Stefan </span><span className="accent">Adolf</span>
            <br/>
            <span className="sub">// principal engineer · architect · {CV.location}</span>
          </h1>

          <p className="tagline">Principal engineer with <span className="acc">two decades</span> of building production systems across web, backends, distributed protocols and on-chain infrastructure. Currently focused on <span className="amb">privacy-preserving compute</span>, agentic systems, and biomedical data.</p>

          <div className="roles">
            {CV.roles.map((r, i) => (
              <span className="role-tag" key={r}>
                <span className="pre">─</span>{r}
              </span>
            ))}
          </div>
        </div>
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
    <>
      <div className="values-strip">
        <span className="lbl">// values</span>
        {VALUES.map((v, i) => (
          <React.Fragment key={v.txt}>
            <span className="v" style={{'--vhue': v.hue}}>
              <span className="dot"></span><span className="txt">{v.txt}</span>
            </span>
            {i < VALUES.length - 1 && <span className="sep">·</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="now-strip">
        <span className="live">
          <span className="pulse"></span>
          currently shipping
        </span>
        <span className="lbl mute">·</span>
        {CV.now.map((p, i) => (
          <React.Fragment key={p.name}>
            <a className="proj" href={p.href} target="_blank" rel="noreferrer">
              <span className="dim">{p.role.toLowerCase()} </span>
              <span className="arrow">→</span>
              <span>{p.name}</span>
            </a>
            {i < CV.now.length - 1 && <span className="mute">·</span>}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function Skills() {
  return (
    <section data-hue="green">
      <SecHead num="00" marker="//" title="skills.matrix" hint={<>{CV.skills.length} categories · <span className="acc">proficiency × years</span></>} />
      <div className="skills">
        <div className="skills-grid">
          {CV.skills.map((cat, i) => (
            <div className="skill-cat" key={cat.id} data-hue={SKILL_HUES[i]} data-id={cat.id}>
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
    <section data-hue="amber">
      <SecHead num="01" marker="//" title="history.log" hint={<><span className="acc">{CV.history.length}</span> entries · descending</>} />
      <div className="history">
        {CV.history.map((h, i) => (
          <HistoryRow key={i} h={h} idx={i} />
        ))}
      </div>
    </section>
  );
}

function HistoryRow({ h, idx }) {
  const hue = HISTORY_HUES[idx] || 'green';
  // era number for watermark — first two of "from"
  const era = h.from.length === 4 ? `'${h.from.slice(2)}` : h.from;
  return (
    <div className="history-row" data-hue={hue} data-era={era}>
      <div className="when">
        <span className="yr">{h.from} → {h.to}</span>
        <span className="dur">{h.dur}</span>
        {idx === 0 && <span className="badge">CURRENT</span>}
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
    <section data-hue="magenta">
      <SecHead num="02" marker="//" title="qualifications.txt" hint={<>education · talks · <span className="acc">awards</span></>} />
      <div className="quals">
        <div className="qual-block">
          <h4><span className="acc">//</span> education & recognition</h4>
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
          <h4><span className="acc">//</span> speaking & community</h4>
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

function IdCard() {
  const t = useClock();
  const time = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  return (
    <aside className="neofetch id-card">
      <div className="portrait">
        <img src="assets/portrait.png" alt="Stefan Adolf" />
      </div>
      {(window.__tweaks?.showAscii ?? true) && (
        <div className="ascii">{ASCII}</div>
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
  );
}

function Contact() {
  return (
    <section data-hue="cyan">
      <SecHead num="03" marker="//" title="contact.sock" hint={<>open a <span className="acc">connection</span></>} />
      <div className="contact contact-with-card">
        <IdCard />
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
  return (
    <div className="foot">
      <span className="left"><span className="acc">$</span> exit 0 · session length <span className="acc">{uptimeFrom(1998)}y</span> · born {BIRTH_YEAR}</span>
      <span className="right">© 2026 · <span className="acc">{CV.handle}</span> · the struggle is real</span>
    </div>
  );
}

function SecHead({ num, marker, title, hint }) {
  return (
    <div className="sec-head">
      {num && <span className="num">[{num}]</span>}
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
        <TweakSlider label="Glow" min={0} max={2} step={0.1} value={t.glow} onChange={v => setTweak('glow', v)} />
        <TweakSlider label="Scanlines" min={0} max={1} step={0.05} value={t.scanlines} onChange={v => setTweak('scanlines', v)} />
        <TweakToggle label="Vignette" value={t.showVignette} onChange={v => setTweak('showVignette', v)} />
        <TweakToggle label="Ambient halos" value={t.showAmbient} onChange={v => setTweak('showAmbient', v)} />
        <TweakToggle label="ASCII logo" value={t.showAscii} onChange={v => setTweak('showAscii', v)} />
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
    document.documentElement.style.setProperty('--glow-strength', t.glow);
    document.documentElement.style.setProperty('--ambient-opacity', t.showAmbient ? 0.9 : 0);
    // accent-dim auto-derived (mix with bg)
    document.documentElement.style.setProperty('--accent-dim', t.accent + '99');
    window.__tweaks = t;
  }, [t.accent, t.scanlines, t.showAscii, t.glow, t.showAmbient]);

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
