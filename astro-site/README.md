# ColorCompare (Astro)

A fast, SEO-first color tools website built with **Astro 6**, **TypeScript**, and **Tailwind CSS 4**. Monetized with Google AdSense (display only). No auth, no payments, no database.

## Quick start

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # astro check + static build to dist/
npm run preview  # serve the built site
```

## What's inside

| Surface | Route | Source |
| --- | --- | --- |
| Homepage | `/` | `src/pages/index.astro` + `src/components/home/*` |
| Tools (10) | `/tools/`, `/tools/[slug]/` | `src/data/tools.ts` → `src/components/tools/*` |
| Palettes (8) | `/colors/`, `/colors/[slug]/` | `src/data/colors.ts` → `ColorPageLayout` |
| Blog (4) | `/blog/`, `/blog/[slug]/` | `src/content/blog/*.mdx` (content collection) |
| Legal/Trust | `/about/` `/privacy-policy/` `/terms/` `/contact/` | `src/pages/*.astro` |

### Architecture notes

- **Interactive tools are vanilla TS islands**, not React. Each tool is an Astro
  component with a scoped `<script>` that imports the shared color math from
  `src/utils/color.ts`. This ships zero framework runtime — each tool page loads
  only ~4KB of its own JS (plus an 8KB shared color lib). The homepage ships no
  external JS.
- **Tools and color pages are typed data files** (`src/data/`), not content
  collections, because their content is highly structured (palettes, FAQs, steps).
  The **blog uses an Astro content collection** with MDX (`src/content.config.ts`)
  where long-form prose benefits from Markdown.
- **SEO**: every page sets a unique title/description/canonical via `SeoHead`,
  emits JSON-LD (WebSite, Organization, BreadcrumbList, SoftwareApplication,
  FAQPage, Article) from `src/utils/schema.ts`, and is included in the generated
  sitemap. `robots.txt` lives in `public/`.

## AdSense configuration

Ads are **off by default**. They are controlled by env vars (see `.env.example`):

```bash
PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6746793430360256
PUBLIC_ADSENSE_ENABLED=false   # set to "true" in production to enable ads
```

- `src/components/ads/AutoAdsScript.astro` loads the AdSense script (only when enabled).
- `src/components/ads/AdSlot.astro` renders a single ad unit. Pass a real `slot`
  ID to make a unit appear; with no slot or when disabled, it renders nothing.
- `public/ads.txt` already contains the publisher ID.

### Before launch

1. Set `PUBLIC_ADSENSE_ENABLED=true` in the production environment.
2. Replace the empty `slot=""` props in `AdSlot` usages with real ad unit IDs.
3. Update the contact email in `src/pages/contact.astro` (currently
   `hello@colorcompare.in`).
4. Confirm `site` in `astro.config.mjs` (`https://colorcompare.in`).
5. Run `npm run build` and submit `sitemap-index.xml` in Google Search Console.

## Project structure

```
src/
  components/   ads/ common/ home/ layout/ tools/
  content/blog/ *.mdx
  data/         tools.ts colors.ts nav.ts
  layouts/      ToolLayout BlogLayout ColorPageLayout
  pages/        index, tools/, colors/, blog/, legal pages, 404
  scripts/      clipboard.ts (shared client helper)
  styles/       global.css tokens.css tools.css
  utils/        color.ts schema.ts seo.ts slug.ts
```
