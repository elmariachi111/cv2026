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
      <span style={{ color: 'var(--t-fg-dim)' }}>~ / cv / stefan-adolf.txt</span>
      <span style={{ flex: 1 }} />
      <span style={{ color: 'var(--t-fg-mute)' }}>tmux · zsh · {stamp}</span>
    </div>
  );
}
