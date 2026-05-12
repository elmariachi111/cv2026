import { useClock, pad } from './hooks';

export function TopBar() {
  const t = useClock();
  const stamp = `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())} ${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  return (
    <div className="t-topbar">
      <div className="t-dots">
        <span className="t-dot t-dot-a" />
        <span className="t-dot t-dot-b" />
        <span className="t-dot t-dot-c" />
      </div>
      <span className="t-path">
        <span className="seg">~</span> / <span className="seg">cv</span> / <span className="file">stefan-adolf.txt</span>
      </span>
      <span className="t-spacer" />
      <span className="t-meta">
        <span className="acc">●</span> tmux<span className="sep">·</span>zsh<span className="sep">·</span>{stamp}
      </span>
    </div>
  );
}
