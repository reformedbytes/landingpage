# Reformed Bytes

Source for reformedbytes.com — built with Next.js 16 (App Router), TypeScript, React 19, Tailwind CSS, and Framer Motion.

## Status

Phases 0–12 of `ReformedBytes_Build_Plan.md` are built:

- Design system: color tokens (WCAG AA-checked), Fraunces/Inter/JetBrains Mono type system, base components (Button, Card, Badge, Tag, Callout, SectionHeading, Container)
- Site shell: header, mobile nav, footer
- Full homepage: Hero, Featured Projects, Current Work, Latest Journal, Quote of the Week (deterministic weekly rotation), Technologies, Newsletter
- Projects: index + individual detail pages (`/projects/[slug]`) with visual placeholders, tech badges, write-ups
- Journal: index with tag filtering, full article pages with write-ups, JSON-LD `Article` structured data
- Quotes: searchable/filterable index (text search + category chips)
- Reading: Currently Reading / Recently Finished / Recommended sections
- About: static page
- Motion: fade/slide entrance animations across all sections and card grids via a shared `Reveal` component, all respecting `prefers-reduced-motion`
- SEO: per-page metadata, OpenGraph, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD on articles
- Accessibility: single `h1` per page, skip link, visible focus states, `aria-pressed` on filter toggles, contrast-checked color tokens
- Security: Next.js 16.2.10 / React 19.2 (the 14.x line stopped receiving security patches — see below), `npm audit` reports 0 vulnerabilities

All of the above — build, type-check, and `npm audit` — were verified in the environment this was built in, immediately after a clean `npm ci`. That verification doesn't carry forward automatically to your local checkout after every pull; if `node_modules` is out of sync with `package-lock.json` (common after a dependency bump like the Next 16 upgrade below), run the clean-reinstall step above before trusting `npm run build` output.

Still ahead: a Lighthouse pass, an MDX/content-collection pipeline for Journal and Projects (currently plain data arrays in `lib/data/` — fine for scaffolding, not yet the long-form writing foundation described in the design brief), and real content (the visible copy is realistic placeholder throughout).

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

**If you're pulling after a dependency bump** (check `git log -p -- package.json` if `npm run build` fails with module-resolution or version-mismatch errors): `node_modules` doesn't update itself on `git pull`. Run a clean reinstall:

```bash
rm -rf node_modules
npm ci
```

`npm ci` installs exactly what's in `package-lock.json`, which is always the source of truth for what this project expects — more reliable than `npm install` when recovering from drift.

## Notes

- **Fonts**: uses `next/font/google` (Fraunces, Inter, JetBrains Mono), fetched and self-hosted at build time. This requires outbound internet access to fonts.googleapis.com during `npm run build` / `npm run dev` — normal for local dev and any standard CI/deploy environment.
- **Linting**: `eslint` / `eslint-config-next` are not yet in `package.json`. Note that Next.js 16 removed the `next lint` command entirely, and current `eslint` (v10) requires flat-config (`eslint.config.mjs`) rather than the old `.eslintrc.json` — this needs a small setup pass whenever you want linting.
- **Content**: placeholder data lives in `lib/data/` (`projects.ts`, `quotes.ts`, `journal.ts`, `reading.ts`). Swap in real content there, or migrate Journal/Projects to MDX when ready for longer-form writing.

## Why Next.js 16, not 14

The site was originally built on Next.js 14.2.x. An `npm audit` turned up several high-severity advisories, and Vercel confirmed the 14.x line isn't receiving further security patches at all — so it wasn't just this batch of fixes at stake, but all future ones too. The project was upgraded to Next.js 16.2.10 + React 19.2, which required two real code changes (not just a version bump):

- `params` in dynamic routes (`/journal/[slug]`, `/projects/[slug]`) are now `Promise`s and must be `await`ed — this affected `generateMetadata` and the page components.
- `tsconfig.json`'s `jsx` option had to change from `"preserve"` to `"react-jsx"` (Next.js 16 enforces this and will rewrite it for you on first build if you don't).

`framer-motion` was bumped to 12.x for React 19 peer-dependency support. `lucide-react` was deliberately *not* bumped to its latest 1.x release — that specific release ships a broken/missing type declaration file — so it stays on the last known-good 0.408.0.

## Deploying to Cloudflare (Workers + Assets)

Cloudflare's own recommended path for Next.js changed since this was first set up: `@cloudflare/next-on-pages` (Cloudflare Pages) is now deprecated in favor of the **OpenNext Cloudflare adapter**, deploying to Cloudflare Workers with static assets rather than Pages. Config lives in `wrangler.toml` and `open-next.config.ts`.

```bash
npm run preview   # builds and serves it locally via Wrangler, close to production
npm run deploy    # builds and deploys to Cloudflare
```

This path was build-verified in the environment this was set up in (`opennextjs-cloudflare build` ran clean and produced `.open-next/worker.js` + `.open-next/assets`) — actual deployment to a live Cloudflare account hasn't been tested (no account access from where this was built). Re-verify with `npm run preview` in your own environment before your first real `npm run deploy`. You'll need to be logged in (`npx wrangler login`) and update the `name` in `wrangler.toml` to match your Cloudflare Workers project name.

See `ReformedBytes_Build_Plan.md` for the full phased roadmap and `ReformedBytes_Landing_Page_Prompt.md` for the original design brief.
