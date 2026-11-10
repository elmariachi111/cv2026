// loop.fun's visual language, miniaturized for the flagship panel:
// a loop = thin dashed ring (blue, dasharray 5 7), the agent = solid red
// dot orbiting it, direction = small red arrowhead (always clockwise).
// Per loop.fun's style guide: only slow rotation (9s/turn), disabled
// under prefers-reduced-motion. Nothing bounces, nothing fades.

export function LoopMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-label="A loop: an agent dot iterating clockwise around a dashed ring"
      role="img"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* the loop itself */}
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        stroke="#519ef6"
        strokeWidth="1.5"
        strokeDasharray="5 7"
      />
      {/* clockwise direction, red, sitting on the ring's top */}
      <path d="M17 1.4 L17 6.6 L24.5 4 Z" fill="#f35b44" />
      {/* the agent, one iteration in flight */}
      <g className="loop-orbit">
        <circle cx="36" cy="20" r="3.4" fill="#f35b44" />
      </g>
    </svg>
  );
}
