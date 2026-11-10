import { CV } from '../../../data/cv';
import { ElgoraWordmark } from './ElgoraWordmark';
import { LoopMark } from './LoopMark';

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
      {CV.flagships.map((f) => (
        <div className={`t-flagship${f.tone === 'green' ? ' is-green' : ''}`} key={f.project}>
          {f.image && (
            <img className="f-photo" src={f.image} alt="" aria-hidden="true" />
          )}
          <div className="f-head">
            <span className="t-live">
              <span className="t-pulse" />
              {f.label}
            </span>
            {f.logo === 'elgora-wordmark' && <ElgoraWordmark className="f-wordmark" />}
            {f.logo === 'loop-mark' && <LoopMark className="f-loopmark" />}
            {f.mark && <img className="f-mark" src={f.mark} alt={`${f.project} mark`} />}
          </div>
          <h3 className="f-title">
            <a className="f-link" href={f.href} target="_blank" rel="noreferrer">
              {f.project}
            </a>
            {f.org && <span className="f-org"> — {f.org}</span>}
          </h3>
          {f.headline && <p className="f-headline">{f.headline}</p>}
          <p className="f-narrative">{f.narrative}</p>
          {(f.duties?.length || f.stack?.length) && (
            <div className="f-cols">
              {f.duties?.length ? (
                <div>
                  <div className="f-label">// {f.dutiesLabel}</div>
                  <ul className="f-duties">
                    {f.duties.map((d) => (
                      <li key={d}>
                        <span className="pre">─</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {f.stack?.length ? (
                <div>
                  <div className="f-label">// {f.stackLabel}</div>
                  <div className="f-stack">
                    {f.stack.map((s) => (
                      <span className="f-chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          )}
          {f.docsHref && (
            <div>
              <a className="f-docs" href={f.docsHref} target="_blank" rel="noreferrer">
                <span className="arrow">→</span> {f.docsHref.replace('https://', '')}
              </a>
            </div>
          )}
          {f.steps && (
            <div className="f-steps">
              {f.steps.map((s) => (
                <span className={`f-step${s === 'repeat' ? ' is-repeat' : ''}`} key={s}>
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
