/**
 * PLATFORM ADAPTATION GUIDE
 * ========================
 * 
 * This portfolio is designed to be easily adapted for multiple platforms:
 * 
 * 1. WEBSITE (Current)
 *    - Full experience with all sections
 *    - Responsive design works on desktop and mobile
 *    - Can be deployed to any static hosting (Vercel, Netlify, GitHub Pages)
 * 
 * 2. INSTAGRAM / SOCIAL MEDIA
 *    - Take screenshots of individual sections (Hero, Values cards, Experience timeline)
 *    - Each section is designed to be visually striking standalone
 *    - Use browser dev tools to set viewport to 1080x1350 (Instagram portrait)
 *    - Suggested posts:
 *      * Hero section: Introduction
 *      * Individual value cards: One per post
 *      * Timeline items: Career journey posts
 *      * Skills showcase: Tech stack reveal
 * 
 * 3. LINKTREE ALTERNATIVE
 *    - Create a minimal version with just ContactSection
 *    - Add Navigation component for quick access
 *    - Deploy to a short custom domain
 *    - Example: links.yourdomain.com
 * 
 * 4. LINKEDIN BANNER/HEADER
 *    - Take screenshot of Hero section
 *    - Crop to 1584x396 pixels
 *    - Adjust browser width before screenshot for better composition
 * 
 * 5. PDF PORTFOLIO (2-3 pages)
 *    - Page 1: Hero + Values (condensed)
 *    - Page 2: Experience Timeline
 *    - Page 3: Skills + Contact
 *    - Use browser print to PDF with custom page breaks
 *    - Set up print styles in CSS for clean output
 * 
 * 6. TELEGRAM BIO
 *    - Extract key values from ValuesSection
 *    - Use short tagline from HeroSection
 *    - Link to full portfolio website
 * 
 * CUSTOMIZATION TIPS:
 * ------------------
 * 
 * Colors (in /src/styles/theme.css):
 * - --neon-cyan: Primary highlight color
 * - --neon-magenta: Secondary accent
 * - --neon-green: Success/positive actions
 * - --neon-yellow: Warnings/attention
 * 
 * Fonts (in /src/styles/fonts.css):
 * - Orbitron: Sci-fi/tech headings (--font-accent)
 * - Space Grotesk: Modern readable body (--font-primary)
 * 
 * Content:
 * - Update contact links in ContactSection.tsx
 * - Modify timeline in ExperienceSection.tsx
 * - Adjust values in ValuesSection.tsx
 * - Update skills in SkillsShowcase.tsx
 * 
 * EXPORT STRATEGIES:
 * -----------------
 * 
 * For Print/PDF:
 * ```css
 * @media print {
 *   .no-print { display: none; }
 *   section { page-break-inside: avoid; }
 * }
 * ```
 * 
 * For Screenshots:
 * - Use browser dev tools responsive mode
 * - Common sizes:
 *   * Instagram Square: 1080x1080
 *   * Instagram Portrait: 1080x1350
 *   * LinkedIn Banner: 1584x396
 *   * Twitter Header: 1500x500
 */

export function PlatformAdaptationGuide() {
  return null; // This is a documentation component
}
