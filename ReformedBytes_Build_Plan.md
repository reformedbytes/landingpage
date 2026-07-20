# Reformed Bytes — Build Plan

A phased implementation plan derived from `ReformedBytes_Landing_Page_Prompt.md`, meant to be handed to a coding session (Claude Code, Codex, or a human) as the execution roadmap.

## Stack Decisions

- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS, shadcn/ui for primitives
- **Motion:** Framer Motion (subtle only — fade/slide/reveal, hover elevation)
- **Icons:** Lucide
- **Content:** MDX for Journal and Project write-ups, via Velite or Contentlayer (either works — Velite has less churn on Next.js version bumps)
- **Data for Quotes/Reading:** simple structured JSON or MDX frontmatter-only files — no CMS needed at this scale
- **Deployment:** Cloudflare Pages via `@cloudflare/next-on-pages`

## Repo Structure

```
app/
  page.tsx                 → Home
  projects/page.tsx        → Projects index
  projects/[slug]/page.tsx → Project detail
  journal/page.tsx         → Journal index
  journal/[slug]/page.tsx  → Article (MDX layout)
  quotes/page.tsx          → Quotes
  reading/page.tsx         → Reading
  about/page.tsx           → About
  layout.tsx, globals.css
components/
  site/                    → Header, MobileNav, Footer
  ui/                      → Button, Card, Badge, Tag, Callout, SectionHeading
  projects/                → ProjectCard, StatusBadge, TechBadge
  journal/                 → ArticlePreviewCard, MDXArticleLayout
  quotes/                  → QuoteCard, FeaturedQuote
  reading/                 → ReadingCard
content/
  projects/*.mdx
  journal/*.mdx
  quotes.json
  reading.json
lib/
  content.ts               → content loaders
  quote-of-week.ts         → deterministic weekly rotation (hash week number → index)
```

## Phase 0 — Scaffold & Tooling

- `create-next-app` with TS + Tailwind + App Router
- ESLint/Prettier, path aliases
- Install shadcn/ui, Framer Motion, Lucide, MDX content pipeline
- Cloudflare adapter installed and a placeholder `wrangler.toml` from day one, so deploy isn't an afterthought

## Phase 1 — Design System

- Color tokens: deep charcoal background, warm gray surfaces, off-white text, one muted accent (avoid blue/purple SaaS default — consider a muted amber or slate-teal)
- Type scale: a distinct display face for hero/headings, a highly readable body face (e.g. a humanist sans like Inter/General Sans paired with a serif or grotesk display)
- Spacing/radius/shadow scale tuned for restraint (soft borders, no glow effects)
- Base components: Button, Card, Badge, Tag, Callout, SectionHeading, Layout wrapper — build these before any page

## Phase 2 — Site Shell

- Header with nav: Projects, Journal, Quotes, Reading, About
- Mobile nav (sheet/drawer)
- Footer: links, copyright, one-line statement
- Route scaffolding for all pages (can be empty/stub initially)

## Phase 3 — Homepage

Sections in order: Hero → Featured Projects → Current Work → Latest Journal → Quote of the Week → Technologies → optional Newsletter → Footer.

Hero copy (from prompt): "Engineering thoughtful software. Building intelligent systems for AI, RF, automation, and infrastructure. Technology shaped by craftsmanship and conviction." CTAs: Explore Projects / Read Journal / View Quotes.

## Phase 4 — Projects

- Index grid with ProjectCard (name, description, status badge, tech badges, screenshot placeholder, link/coming-soon)
- Detail page per project with optional write-up
- Placeholder entries: Birmingham FireMap, Market Monitor, Sonos Dashboard, Coffee Dashboard, Raspberry Pi projects, SDR Lab, "Future projects" teaser

## Phase 5 — Journal

- MDX article layout with strong typography, tags, date metadata
- ArticlePreviewCard for index
- Basic tag filter (client-side, no backend needed)
- 2–3 seed posts covering AI, RF/networking, and a craftsmanship/stewardship reflection

## Phase 6 — Quotes

- QuoteCard + FeaturedQuote components
- Category tags: Theology, Leadership, Engineering, Wisdom, Craftsmanship, Work
- Client-side search/filter
- Seed set including the Kuyper quote as an anchor, plus 8–12 more spanning categories
- `lib/quote-of-week.ts`: deterministic index from ISO week number so the homepage feature rotates automatically without a cron job

## Phase 7 — Reading

- Sections: Currently Reading, Recently Finished, Recommended
- ReadingCard (cover placeholder, title, author, short note)
- Seed list mixing theology, engineering, biography, history

## Phase 8 — About

- Static page using the direction text in the prompt as a starting draft, lightly edited for voice

## Phase 9 — Motion Pass

- Page-level fade/slide-in on mount
- Card hover elevation
- Respect `prefers-reduced-motion` everywhere motion is added

## Phase 10 — Accessibility & SEO

- Semantic landmarks, heading hierarchy check
- Visible focus rings, keyboard nav pass
- WCAG AA contrast check on the palette chosen in Phase 1
- Metadata/OpenGraph per page, sitemap.xml, robots.txt, JSON-LD for articles

## Phase 11 — Performance & Responsive QA

- Image optimization (`next/image`), font subsetting
- Lighthouse pass targeting 95+
- Manual mobile/tablet pass — cards and article typography specifically, not just breakpoint shrinkage

## Phase 12 — Deploy

- Finalize Cloudflare Pages build (`@cloudflare/next-on-pages`)
- Environment/config notes
- Domain wiring for reformedbytes.com

## Content Approach

Placeholder content throughout (Phase 4–7) — realistic enough to judge the design, swapped for real project write-ups, journal posts, quotes, and reading list once the design is approved.

## Suggested Execution Order for a Build Session

Phases 0 → 1 → 2 → 3 (get the homepage right first — everything else reuses its components), then 4 → 8 in any order, then 9 → 12 as a final polish pass.
