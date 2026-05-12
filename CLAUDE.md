# CV26 — Claude Notes

## Logo sourcing

**Primary source:** `https://cdn.simpleicons.org/{slug}` — covers ~3000 tech brands. Slug is usually the lowercase brand name (e.g. `postgresql`, `docker`, `nextdotjs`, `amazonwebservices`). Use `curl -sf -o name.svg URL` to download; a non-zero exit means the slug is wrong, not that the logo doesn't exist.

**Common slug gotchas:**
- AWS → `amazonwebservices` (fails as of mid-2025; fallback: `https://api.iconify.design/logos/aws.svg`)
- Next.js → `nextdotjs`
- Java → `openjdk`
- Base (Coinbase L2) → use `coinbase` slug

**Fallbacks in priority order:**
1. `https://api.iconify.design/logos/{name}.svg` — colorful variants, good for AWS, GCP, etc.
2. GitHub raw: `https://raw.githubusercontent.com/{org}/{repo}/main/assets/icon.svg`
3. Official site (e.g. `https://www.getfoundry.sh/foundry-logo.png`) — PNG is fine, Vite handles it
4. Text abbreviation badge in the component (no file needed)

**Rendering:** mono SVGs from Simple Icons need `filter: grayscale(1) brightness(1.5)` to look good on dark backgrounds. Brand-colored logos (AWS, GCP, Langfuse) should skip the filter — use a `colored` flag in the data model.

## Stack

Vite + React 19, no Next.js. Use plain `<img>` tags, not `next/image`.
