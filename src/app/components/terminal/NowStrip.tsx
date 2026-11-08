import { CV } from '../../../data/cv';

const VALUES = [
  
  { hue: 'var(--t-magenta)', txt: 'privacy' },
  { hue: 'var(--t-accent)',  txt: 'open protocols' },
  
  { hue: 'var(--t-cyan)',    txt: 'permissionless access' },
  { hue: 'var(--t-violet)',  txt: 'sustainability' },
  { hue: 'var(--t-amber)',   txt: 'censorship resistance' },
];

export function NowStrip() {
  return (
    <>
      <div className="t-values-strip">
        <span className="lbl">// operating principles</span>
        {VALUES.map((v, i) => (
          <span key={v.txt} style={{ display: 'contents' }}>
            <span className="val" style={{ '--vhue': v.hue } as React.CSSProperties}>
              <span className="dot" />
              <span className="txt">{v.txt}</span>
            </span>
            {i < VALUES.length - 1 && <span className="sep">·</span>}
          </span>
        ))}
      </div>
      <div className="t-flagship">
        <div className="f-head">
          <span className="t-live">
            <span className="t-pulse" />
            currently shipping
          </span>
        </div>
        <h3 className="f-title">
          co-building{' '}
          <a className="f-link" href={CV.flagship.href} target="_blank" rel="noreferrer">
            {CV.flagship.project}
          </a>
          <span className="f-org"> — {CV.flagship.org}</span>
        </h3>
        <p className="f-headline">{CV.flagship.headline}</p>
        <p className="f-narrative">{CV.flagship.narrative}</p>
        <div className="f-cols">
          <div>
            <div className="f-label">// {CV.flagship.dutiesLabel}</div>
            <ul className="f-duties">
              {CV.flagship.duties.map((d) => (
                <li key={d}>
                  <span className="pre">─</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="f-label">// {CV.flagship.stackLabel}</div>
            <div className="f-stack">
              {CV.flagship.stack.map((s) => (
                <span className="f-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <a className="f-docs" href={CV.flagship.docsHref} target="_blank" rel="noreferrer">
            <span className="arrow">→</span> docs.elgora.ai
          </a>
        </div>
      </div>
    </>
  );
}
