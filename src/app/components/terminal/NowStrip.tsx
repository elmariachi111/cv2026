import { CV } from '../../../data/cv';

const VALUES = [
  { hue: 'var(--t-accent)',   txt: 'cypherpunk' },
  { hue: 'var(--t-magenta)', txt: 'privacy' },
  { hue: 'var(--t-accent)',  txt: 'empathy' },
  { hue: 'var(--t-cyan)',    txt: 'permissionless access' },
  { hue: 'var(--t-violet)',  txt: 'sustainability' },
  { hue: 'var(--t-amber)',   txt: 'censorship resistance' },
];

export function NowStrip() {
  return (
    <>
      <div className="t-values-strip">
        <span className="lbl">// values</span>
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
      <div className="t-now-strip">
        <span className="t-live">
          <span className="t-pulse" />
          currently shipping
        </span>
        <span style={{ color: 'var(--t-fg-mute)' }}>·</span>
        {CV.now.map((p, i) => (
          <span key={p.name} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <a className="t-proj" href={p.href} target="_blank" rel="noreferrer">
              <span style={{ color: 'var(--t-fg-dim)' }}>{p.role.toLowerCase()} </span>
              <span className="arrow">→</span>
              <span>{p.name}</span>
            </a>
            {i < CV.now.length - 1 && (
              <span style={{ color: 'var(--t-fg-mute)' }}>·</span>
            )}
          </span>
        ))}
      </div>
    </>
  );
}
