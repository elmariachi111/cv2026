import { CV } from '../../../data/cv';

export function NowStrip() {
  return (
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
            <span style={{ color: 'var(--t-accent)' }}>→ {p.name}</span>
          </a>
          {i < CV.now.length - 1 && (
            <span style={{ color: 'var(--t-fg-mute)' }}>·</span>
          )}
        </span>
      ))}
    </div>
  );
}
