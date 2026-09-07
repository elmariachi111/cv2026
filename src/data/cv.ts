// Single source of truth for CV content is root cv-data.jsx.
// This module loads that file's source via Vite's ?raw import and evaluates it
// in a sandbox, so the standalone CV.html page (classic script + window.CV)
// and the Vite app share ONE data file that can never drift.
//
// Why not `import { CV } from '../../cv-data.jsx'`? babel-standalone on the
// standalone page transpiles text/babel scripts as CommonJS: an `export {}`
// statement in the shared file becomes `exports.CV = CV`, which throws
// "exports is not defined" in classic script scope (verified in a real
// browser). Keeping cv-data.jsx free of module syntax and evaluating the raw
// text here is the only shape that works for BOTH consumers.
import raw from '../../cv-data.jsx?raw';

export interface SkillItem {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  yrs: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface HistoryEntry {
  from: string;
  to: string;
  dur: string;
  logo: string;
  logoImage?: string;
  company: string;
  role: string;
  desc: string;
  tech: string[];
  label: string;
  image?: string;
  imagePosition?: string;
}

export interface QualEntry {
  yr: string;
  ttl: string;
  where: string;
  href?: string;
}

export interface ContactEntry {
  k: string;
  v: string;
  href: string;
}

export interface NowEntry {
  name: string;
  role: string;
  href: string;
}

export interface CVData {
  name: string;
  handle: string;
  tagline: string;
  blurb: string;
  location: string;
  email: string;
  site: string;
  birthYear: number;
  codingSince: number;
  roles: string[];
  now: NowEntry[];
  skills: SkillCategory[];
  history: HistoryEntry[];
  education: QualEntry[];
  publications: QualEntry[];
  speaking: QualEntry[];
  contacts: ContactEntry[];
}

// Evaluate the classic script's source once. It ends with `window.CV = CV`,
// so we provide a `window` shim and read the assigned object back.
function loadCV(): CVData {
  const sandboxWindow: { CV?: CVData } = {};
  // eslint-disable-next-line no-new-func
  new Function('window', 'module', raw)(sandboxWindow, undefined);
  const cv = sandboxWindow.CV;
  if (!cv) throw new Error('cv-data.jsx did not set window.CV');
  return cv;
}

export const CV: CVData = loadCV();
export const BIRTH_YEAR = CV.birthYear;
export const CODING_SINCE = CV.codingSince;