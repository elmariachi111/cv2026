import { useState, useEffect } from 'react';
import { BIRTH_YEAR, CODING_SINCE } from '../../../data/cv';

export function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function uptimeFrom(year: number): string {
  const start = new Date(year, 0, 1);
  const diff = Date.now() - start.getTime();
  return (diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2);
}

export function ageNow(): number {
  return Math.floor(Number(uptimeFrom(BIRTH_YEAR)));
}

export { BIRTH_YEAR, CODING_SINCE };
