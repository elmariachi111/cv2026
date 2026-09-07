import { CV, BIRTH_YEAR, CODING_SINCE } from '../../../data/cv';
import { useClock, pad, ageNow, uptimeFrom } from './hooks';

const ASCII = [
  '   ██╗  ██╗ █████╗  ██████╗██╗  ██╗',
  '   ██║  ██║██╔══██╗██╔════╝██║ ██╔╝',
  '   ███████║███████║██║     █████╔╝ ',
  '   ██╔══██║██╔══██║██║     ██╔═██╗ ',
  '   ██║  ██║██║  ██║╚██████╗██║  ██╗',
  '   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝',
].join('\n');

function NeoRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="t-neo-row">
      <span className="k">{k}</span>
      <span className="v">{v}</span>
    </div>
  );
}

export function IdCard() {
  const t = useClock();
  const time = `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;

  return (
    <aside className="t-neofetch">
      <div className="portrait">
        <img src="/portrait.png" alt="Stefan Adolf" />
      </div>
      <NeoRow k="user"   v={CV.handle} />
      <NeoRow k="location"   v="berlin neukölln" />
      <NeoRow k="role"   v="protocol & agent systems" />
      <NeoRow k="shell"  v="zsh + tmux" />
      <hr />
      <NeoRow k="age"    v={`${ageNow()}y`} />
      <NeoRow k="born"   v={`${BIRTH_YEAR}.01 · DE`} />
      <NeoRow k="uptime" v={`${uptimeFrom(CODING_SINCE)} yrs coding`} />
      <NeoRow k="clock"  v={time} />
    </aside>
  );
}
