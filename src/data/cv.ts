// Single source of truth for CV content is now root cv-data.jsx.
// This shim re-exports it with types and app-specific constants,
// so the standalone CV.html page and the Vite app share ONE data source.
import { CV as CVData } from '../../cv-data.jsx';

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

export const CV = CVData;
export const BIRTH_YEAR = CVData.birthYear ?? 1911;
export const CODING_SINCE = CVData.codingSince ?? 1911;
