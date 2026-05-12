import { CV, BIRTH_YEAR, CODING_SINCE } from '../../../data/cv';
import { useClock, uptimeFrom } from './hooks';

export function TerminalFooter() {
  useClock(); // re-render each second so uptime stays live
  return (
    <div className="t-foot">
      <span style={{ letterSpacing: '0.08em' }}>
        $ exit 0 · session length {uptimeFrom(CODING_SINCE)}y · born {BIRTH_YEAR}
      </span>
      <span>© 2026 · {CV.handle} · the struggle is real</span>
    </div>
  );
}
