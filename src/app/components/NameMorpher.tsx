import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const PHASES = [
  { text: 'Stefan Adolf', color: 'var(--neon-cyan)' },
  { text: 'elmariachi', color: 'var(--neon-pink)' },
] as const;

const MAX_LEN = Math.max(...PHASES.map(p => p.text.length));

export function NameMorpher() {
  const [phaseIdx, setPhaseIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhaseIdx(p => (p + 1) % PHASES.length), 4000);
    return () => clearInterval(id);
  }, []);

  const { text, color } = PHASES[phaseIdx];
  const chars = text.replace(/ /g, '\u00a0').padEnd(MAX_LEN, '\u00a0').split('');

  return (
    <span
      style={{
        display: 'inline-flex',
        fontFamily: 'var(--font-accent)',
        fontSize: '1.25rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}
    >
      {chars.map((char, i) => (
        <CharCell key={i} char={char} color={color} delay={i * 0.04} phaseIdx={phaseIdx} />
      ))}
    </span>
  );
}

function CharCell({
  char,
  color,
  delay,
  phaseIdx,
}: {
  char: string;
  color: string;
  delay: number;
  phaseIdx: number;
}) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', height: '1.4em', lineHeight: '1.4' }}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.span
          key={phaseIdx}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.25, delay, ease: 'easeInOut' }}
          style={{
            display: 'block',
            color,
            textShadow: `0 0 15px ${color}`,
          }}
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
