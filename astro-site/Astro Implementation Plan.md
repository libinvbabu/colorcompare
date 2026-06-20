# ColorCompare Astro Implementation Plan

A from-scratch implementation plan for an AI coding agent to build the redesigned ColorCompare website using Astro. Monetization is AdSense-only for now. Do not implement premium plans, login, subscriptions, payments, or account systems in this phase.

---

## 1. Product Goal

Build a fast, beautiful, SEO-first color tools website that helps designers, developers, marketers, students, and creators compare colors, generate palettes, check accessibility, convert color formats, and discover color inspiration.

The homepage should feel like a premium product-led utility hub, while the site architecture should support long-term organic growth through many indexable tool pages, color pages, palette pages, and educational content.

Primary business model for this phase: AdSense display monetization.

---

## 2. Non-Negotiables

- Use Astro as the core framework.
- Prefer static generation wherever possible.
- Use TypeScript.
- Use Astro components by default.
- Use client-side JavaScript only for interactive tools that need it.
- No premium plans.
- No auth.
- No billing.
- No user dashboard.
- No database for v1 unless absolutely required.
- Keep the site lightweight, crawlable, and highly performant.
- Build mobile-first, then enhance for desktop.
- All tool pages must have meaningful static SEO content above and below the interactive UI.
- AdSense should be integrated safely without making the site feel spammy.

---

## 3. Recommended Tech Stack

### Core

- Astro latest stable
- TypeScript
- Tailwind CSS
- Astro content collections
- Astro sitemap integration
- Markdown or MDX for blog/resource content

### Optional but useful

- `@astrojs/mdx` for richer blog pages
- `@astrojs/sitemap` for sitemap generation
- `astro-compress` or equivalent only if needed after performance checks
- `sharp` through Astro image pipeline where image optimization is needed

### Avoid for v1

- Next.js
- React app-wide rendering
- Auth providers
- Payment SDKs
- CMS integration
- Database
- Heavy UI libraries

---

## 4. High-Level Site Structure

The website should be organized around five content surfaces:

1. Homepage
2. Tool pages
3. Color and palette discovery pages
4. Blog/resource pages
5. Static trust/legal pages

Recommended URL structure:

```txt
/
/tools/
/tools/color-compare/
/tools/contrast-checker/
/tools/palette-generator/
/tools/hex-to-rgb/
/tools/rgb-to-hex/
/tools/cmyk-converter/
/tools/gradient-generator/
/tools/image-color-picker/
/tools/color-blindness-simulator/
/tools/shades-and-tints-generator/
/tools/css-color-preview/

/colors/
/colors/blue-palettes/
/colors/black-and-gold/
/colors/pastel-palettes/
/colors/website-color-schemes/
/colors/wedding-color-palettes/
/colors/logo-color-combinations/
/colors/brand-color-ideas/
/colors/ui-color-inspiration/

/blog/
/blog/color-theory-basics/
/blog/best-website-color-combinations/
/blog/accessible-ui-colors/
/blog/branding-color-psychology/

/about/
/privacy-policy/
/terms/
/contact/
```

---

## 5. Final Astro Project Structure

Ask the AI agent to create this structure:

```txt
colorcompare/
  public/
    favicon.svg
    robots.txt
    ads.txt
    images/
      og-default.png
  src/
    assets/
    components/
      ads/
        AdSlot.astro
        AutoAdsScript.astro
      common/
        Button.astro
        Container.astro
        SectionHeader.astro
        Badge.astro
        Card.astro
      home/
        Hero.astro
        ProductPreview.astro
        PopularTools.astro
        ExploreUseCases.astro
        Benefits.astro
        BlogPreview.astro
        HomeFooterCta.astro
      layout/
        Header.astro
        Footer.astro
        SeoHead.astro
        BaseLayout.astro
      tools/
        ToolShell.astro
        ToolIntro.astro
        ToolFaq.astro
        RelatedTools.astro
        ColorCompareTool.tsx
        ContrastCheckerTool.tsx
        PaletteGeneratorTool.tsx
        ConverterTool.tsx
        GradientGeneratorTool.tsx
        ImageColorPickerTool.tsx
        ColorBlindnessSimulatorTool.tsx
        ShadesTintsTool.tsx
        CssColorPreviewTool.tsx
    content/
      blog/
      colors/
      tools/
    data/
      tools.ts
      colors.ts
      nav.ts
      seo.ts
    layouts/
      BlogLayout.astro
      ColorPageLayout.astro
      ToolLayout.astro
    pages/
      index.astro
      tools/
        index.astro
        [slug].astro
      colors/
        index.astro
        [slug].astro
      blog/
        index.astro
        [slug].astro
      about.astro
      privacy-policy.astro
      terms.astro
      contact.astro
    styles/
      global.css
      tokens.css
    utils/
      color.ts
      seo.ts
      schema.ts
      slug.ts
    content.config.ts
  astro.config.mjs
  package.json
  tsconfig.json
  tailwind.config.mjs
```

Important Astro note: only `src/pages` is required by Astro for routes, but keep the rest organized for maintainability.

---

## 6. Implementation Phases

## Phase 0: Repo Initialization

### Goal

Create a clean Astro project with Tailwind, TypeScript, sitemap, and base configs.

### Agent tasks

1. Create the Astro project.

```bash
npm create astro@latest colorcompare
cd colorcompare
```

Recommended prompts during setup:

- Template: Empty or minimal
- TypeScript: Strict
- Install dependencies: Yes

2. Add Tailwind.

```bash
npx astro add tailwind
```

3. Add sitemap.

```bash
npx astro add sitemap
```

4. Add MDX if rich content is desired.

```bash
npx astro add mdx
```

5. Configure `astro.config.mjs`.

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://colorcompare.in',
  integrations: [tailwind(), sitemap(), mdx()],
  output: 'static',
});
```

6. Add scripts to `package.json`.

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

### Acceptance criteria

- `npm run dev` works.
- `npm run build` works.
- Homepage renders a placeholder.
- Sitemap integration is configured with production site URL.

---

## Phase 1: Design System Foundation

### Goal

Create a premium, reusable visual foundation matching the homepage concept.

### Visual direction

- Light background
- Soft gradients
- Colorful accents
- Rounded cards
- Subtle borders
- Clean typography
- Mobile-first spacing
- High contrast text
- Vivid color preview components

### CSS tokens

Create `src/styles/tokens.css`:

```css
:root {
  --cc-bg: #fbfcff;
  --cc-surface: #ffffff;
  --cc-surface-soft: #f5f7fb;
  --cc-text: #111827;
  --cc-muted: #5b6472;
  --cc-border: rgba(17, 24, 39, 0.1);
  --cc-primary: #6d5dfc;
  --cc-primary-dark: #5145d8;
  --cc-pink: #ff4fa3;
  --cc-cyan: #16c8f3;
  --cc-green: #22c55e;
  --cc-yellow: #facc15;
  --cc-radius-sm: 10px;
  --cc-radius-md: 16px;
  --cc-radius-lg: 24px;
  --cc-shadow-card: 0 18px 50px rgba(15, 23, 42, 0.08);
  --cc-shadow-soft: 0 10px 30px rgba(15, 23, 42, 0.06);
}
```

Create `src/styles/global.css`:

```css
@import './tokens.css';

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(109, 93, 252, 0.12), transparent 34rem),
    radial-gradient(circle at top right, rgba(255, 79, 163, 0.1), transparent 30rem),
    var(--cc-bg);
  color: var(--cc-text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img,
svg {
  max-width: 100%;
}
```

### Base components

Build:

- `Container.astro`
- `Button.astro`
- `Badge.astro`
- `Card.astro`
- `SectionHeader.astro`

### Acceptance criteria

- Components are reusable.
- Layout spacing is consistent.
- Buttons support primary, secondary, and ghost variants.
- Cards support hover states.
- Design works on mobile and desktop.

---

## Phase 2: Global Layout, SEO, Header, Footer

### Goal

Create the shared shell used by all pages.

### Base layout

Create `src/components/layout/BaseLayout.astro` with props:

```ts
interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}
```

Include:

- HTML lang
- viewport meta
- title
- meta description
- canonical URL
- Open Graph tags
- Twitter card tags
- favicon
- global CSS import
- AdSense script component
- header
- footer

### SEO component

Create `SeoHead.astro` to keep metadata reusable.

### Header

Navigation items:

- Tools
- Palettes
- Accessibility
- Generators
- Blog
- About

CTA:

- Open Tool -> `/tools/color-compare/`

Header requirements:

- Sticky on desktop or subtly sticky on all devices.
- Mobile menu.
- Logo text: `ColorCompare`.
- Keep layout clean and not too tall.

### Footer

Columns:

- Tools
- Resources
- Popular Color Pages
- Legal

Footer links should include all key SEO pages.

### Acceptance criteria

- All pages use `BaseLayout`.
- Metadata works per page.
- Header and footer are complete.
- Mobile nav works.

---

## Phase 3: AdSense Integration

### Goal

Add AdSense monetization without harming UX or violating safe ad placement principles.

### Required files

Create:

- `src/components/ads/AutoAdsScript.astro`
- `src/components/ads/AdSlot.astro`
- `public/ads.txt`

### Environment variables

Create `.env.example`:

```bash
PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
PUBLIC_ADSENSE_ENABLED=false
```

Use `PUBLIC_ADSENSE_ENABLED` so ads can be disabled during development.

### Auto ads script component

`AutoAdsScript.astro`:

```astro
---
const enabled = import.meta.env.PUBLIC_ADSENSE_ENABLED === 'true';
const clientId = import.meta.env.PUBLIC_ADSENSE_CLIENT_ID;
---

{enabled && clientId && (
  <script
    async
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
    crossorigin="anonymous"
  ></script>
)}
```

Include this once in `BaseLayout.astro` inside `<head>`.

### Manual ad slot component

`AdSlot.astro` props:

```ts
interface Props {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  className?: string;
  label?: string;
}
```

Render nothing if ads are disabled or no slot is provided.

Basic implementation:

```astro
---
interface Props {
  slot?: string;
  format?: string;
  className?: string;
  label?: string;
}

const {
  slot,
  format = 'auto',
  className = '',
  label = 'Advertisement',
} = Astro.props;

const enabled = import.meta.env.PUBLIC_ADSENSE_ENABLED === 'true';
const clientId = import.meta.env.PUBLIC_ADSENSE_CLIENT_ID;
---

{enabled && clientId && slot && (
  <div class={`ad-wrapper ${className}`} aria-label={label}>
    <span class="ad-label">{label}</span>
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    ></ins>
    <script is:inline>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
  </div>
)}

<style>
  .ad-wrapper {
    margin: 2rem auto;
    min-height: 90px;
    border-radius: 16px;
    overflow: hidden;
  }

  .ad-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--cc-muted);
    font-size: 0.75rem;
    text-align: center;
  }
</style>
```

### Initial ad placement strategy

Homepage:

- One horizontal ad after Popular Tools.
- One ad near Blog Preview or before footer.

Tool pages:

- One ad after the tool UI, before explanatory content.
- One ad after FAQs or related tools.

Blog pages:

- One ad after intro section.
- One in-article ad after approximately 40 percent of content.
- One ad near the end.

Do not place ads:

- Directly above primary CTAs.
- Inside interactive tool controls.
- So close to buttons that accidental clicks are likely.
- In a way that visually disguises ads as tools or navigation.

### `ads.txt`

Create placeholder:

```txt
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

The agent must replace `pub-XXXXXXXXXXXXXXXX` with the real publisher ID after AdSense approval.

### Acceptance criteria

- Ads are disabled by default locally.
- AdSense script loads only when enabled.
- Ad slots render only when slot ID is provided.
- Layout remains clean when ads are disabled.
- `ads.txt` exists.

---

## Phase 4: Homepage Implementation

### Goal

Build the full homepage from the generated design concept.

### Homepage sections

Implement `src/pages/index.astro` using these sections:

1. Hero
2. Product Preview
3. Popular Tools
4. Explore by Color & Use Case
5. Ad slot
6. Why People Use ColorCompare
7. Blog Preview
8. Footer CTA or lightweight closing section

### Hero content

Headline:

```txt
All-in-one Color Tools for Designers & Developers
```

Subheadline:

```txt
Compare colors side by side, generate palettes, check accessibility, convert formats, and discover combinations for websites, brands, logos, and creative projects.
```

CTAs:

- Start Comparing -> `/tools/color-compare/`
- Browse Tools -> `/tools/`

Hero requirements:

- Big, confident headline.
- Product preview visible above fold on desktop.
- Strong mobile ordering: text first, product preview second.
- Trust badges: `Free tools`, `Accessibility checks`, `HEX RGB HSL CMYK`, `No signup`.

### Product preview

Create a static interactive-style mock UI:

- Three color comparison cards.
- HEX values.
- RGB values.
- Contrast score.
- Palette strip.
- Small tabs: Compare, Contrast, Convert.
- Fake controls, not functional on homepage.

### Popular Tools grid

Use data from `src/data/tools.ts`.

Initial tools:

```ts
export const tools = [
  {
    title: 'Color Compare',
    slug: 'color-compare',
    description: 'Compare two or more colors side by side with HEX, RGB, HSL, and contrast details.',
    category: 'Core',
  },
  {
    title: 'Contrast Checker',
    slug: 'contrast-checker',
    description: 'Check WCAG contrast ratios for text, backgrounds, buttons, and UI components.',
    category: 'Accessibility',
  },
  {
    title: 'Palette Generator',
    slug: 'palette-generator',
    description: 'Generate balanced color palettes for websites, brands, presentations, and visuals.',
    category: 'Generator',
  },
  {
    title: 'HEX to RGB Converter',
    slug: 'hex-to-rgb',
    description: 'Convert HEX color codes into RGB, HSL, and CSS-ready values instantly.',
    category: 'Converter',
  },
  {
    title: 'CMYK Converter',
    slug: 'cmyk-converter',
    description: 'Convert digital colors into CMYK values for print workflows.',
    category: 'Converter',
  },
  {
    title: 'Gradient Generator',
    slug: 'gradient-generator',
    description: 'Create smooth CSS gradients and copy production-ready CSS.',
    category: 'Generator',
  },
  {
    title: 'Image Color Picker',
    slug: 'image-color-picker',
    description: 'Extract dominant colors and palettes from uploaded images in your browser.',
    category: 'Extractor',
  },
  {
    title: 'Color Blindness Simulator',
    slug: 'color-blindness-simulator',
    description: 'Preview how color combinations may appear to users with different color vision types.',
    category: 'Accessibility',
  },
  {
    title: 'Shades & Tints Generator',
    slug: 'shades-and-tints-generator',
    description: 'Create lighter tints and darker shades from any base color.',
    category: 'Generator',
  },
  {
    title: 'CSS Color Preview',
    slug: 'css-color-preview',
    description: 'Preview named CSS colors, HEX, RGB, HSL, gradients, and alpha values.',
    category: 'CSS',
  },
];
```

### Explore by Color & Use Case

Pills/cards:

- Blue palettes
- Black and gold combinations
- Website color schemes
- Wedding color palettes
- Logo color combinations
- UI color inspiration
- Pastel palettes
- Brand color ideas
- Minimal color palettes
- Luxury color combinations
- Nature-inspired palettes
- Social media color ideas

Each should link to a real or planned `/colors/[slug]/` page.

### Benefits section

Cards:

1. Fast enough for daily design work
2. Built for accessibility checks
3. Useful for both design and development
4. Organized for discovery and learning

### Blog preview

Initial cards:

- Color Theory Basics for Digital Design
- Best Website Color Combinations
- How to Choose Accessible UI Colors
- Branding Color Psychology: A Practical Guide

### Acceptance criteria

- Homepage matches the visual quality of the concept.
- Looks premium on mobile and desktop.
- All links point to existing or planned pages.
- No premium/subscription language.
- One or two ad zones only.

---

## Phase 5: Content Collections

### Goal

Use Astro content collections for tools, color pages, and blog pages so content is typed, reusable, and scalable.

Create `src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.string(),
    heroTitle: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    relatedTools: z.array(z.string()).default([]),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
  }),
});

const colors = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    palettes: z.array(
      z.object({
        name: z.string(),
        colors: z.array(z.string()),
        useCase: z.string().optional(),
      })
    ).default([]),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('ColorCompare Team'),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { tools, colors, blog };
```

### Acceptance criteria

- Collections are typed.
- Dynamic pages read from collections.
- Build fails if required SEO fields are missing.

---

## Phase 6: Tool Pages

### Goal

Build reusable SEO-friendly tool pages with static explanatory content plus client-side interactive widgets.

### Tool page layout

Each tool page should have:

1. Breadcrumbs
2. Tool hero
3. Interactive tool card
4. Ad slot
5. How to use section
6. Practical examples
7. Why this tool matters
8. FAQs with schema
9. Related tools
10. Optional bottom ad slot

### Dynamic route

Create `src/pages/tools/[slug].astro`:

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../components/layout/BaseLayout.astro';
import ToolLayout from '../../layouts/ToolLayout.astro';

export async function getStaticPaths() {
  const tools = await getCollection('tools');
  return tools.map((tool) => ({
    params: { slug: tool.data.slug },
    props: { tool },
  }));
}

const { tool } = Astro.props;
---

<BaseLayout title={tool.data.seoTitle} description={tool.data.seoDescription}>
  <ToolLayout tool={tool} />
</BaseLayout>
```

### Client-side tool components

Astro page should import the right island component based on slug.

Use a simple mapping:

```astro
---
import ColorCompareTool from '../components/tools/ColorCompareTool.tsx';
import ContrastCheckerTool from '../components/tools/ContrastCheckerTool.tsx';
---

{tool.data.slug === 'color-compare' && <ColorCompareTool client:load />}
{tool.data.slug === 'contrast-checker' && <ContrastCheckerTool client:load />}
```

For components below the fold, prefer `client:visible`.

### Tool v1 functionality

#### Color Compare

- Input 2-5 colors.
- Support HEX input initially.
- Show swatches.
- Show HEX, RGB, HSL.
- Show contrast ratio between selected pair.
- Copy values.

#### Contrast Checker

- Foreground input.
- Background input.
- Contrast ratio.
- WCAG AA/AAA pass indicators for normal text and large text.
- Preview text block.

#### Palette Generator

- Generate palette from base color.
- Modes: complementary, analogous, triadic, monochromatic.
- Copy palette.

#### HEX to RGB Converter

- HEX input.
- Output RGB, HSL, CSS syntax.
- Copy buttons.

#### CMYK Converter

- HEX/RGB input.
- Output approximate CMYK.
- Note that screen-to-print conversion can vary by printer/profile.

#### Gradient Generator

- Two or more colors.
- Direction selector.
- CSS preview.
- Copy CSS.

#### Image Color Picker

- Browser-only image upload.
- No server upload.
- Extract dominant colors using canvas.
- Copy palette.

#### Color Blindness Simulator

- Input colors/palette.
- Show simulated preview for common modes.
- Include disclaimer that it is an approximation.

#### Shades & Tints Generator

- Base color input.
- Generate 10 tints and 10 shades.
- Copy HEX values.

#### CSS Color Preview

- Input CSS color string.
- Preview result.
- Show normalized values where possible.

### Acceptance criteria

- Each tool works without backend.
- Each tool page is indexable.
- Each tool page has at least 600-1000 words of useful supporting content over time.
- Tool UI remains usable on mobile.
- Related tools links are present.

---

## Phase 7: Color and Palette Discovery Pages

### Goal

Create SEO landing pages around color use cases and popular combinations.

### Page layout

Each `/colors/[slug]/` page should include:

1. Hero section
2. Palette cards
3. Copyable HEX values
4. Best use cases
5. Design tips
6. Related color pages
7. Related tools
8. FAQs
9. Ad slot after main palette section

### Initial pages

Create these collection entries:

- `blue-palettes.md`
- `black-and-gold.md`
- `pastel-palettes.md`
- `website-color-schemes.md`
- `wedding-color-palettes.md`
- `logo-color-combinations.md`
- `brand-color-ideas.md`
- `ui-color-inspiration.md`

### Palette card requirements

Each palette card:

- Palette name
- 4-6 swatches
- HEX values
- Copy all button
- Suggested use case

### Acceptance criteria

- Pages are static.
- Each page has original helpful content.
- Internal links point to relevant tools.
- Pages do not feel like thin SEO pages.

---

## Phase 8: Blog / Resource Content

### Goal

Create educational articles that support SEO and internal linking.

### Blog index

`/blog/` should show:

- Featured article
- Category filters or tag pills
- Article grid
- Newsletter CTA should be skipped for v1 unless email capture is planned soon

### Initial articles

Create:

1. `color-theory-basics.md`
2. `best-website-color-combinations.md`
3. `accessible-ui-colors.md`
4. `branding-color-psychology.md`

### Article requirements

Each article should include:

- Clear intro
- Table of contents
- Practical examples
- Internal links to tools
- Internal links to color pages
- FAQ section where relevant
- Ad slots inserted carefully

### Acceptance criteria

- Blog pages have clean typography.
- Articles link naturally to tools.
- Article pages have Article schema.

---

## Phase 9: SEO Implementation

### Goal

Make the site technically strong for organic growth.

### Technical SEO checklist

- Unique title and description per page.
- Canonical URL per page.
- Open Graph tags.
- Twitter cards.
- Sitemap generated.
- `robots.txt` exists.
- Clean semantic HTML.
- One H1 per page.
- Proper heading hierarchy.
- Breadcrumbs on tool/color/blog detail pages.
- Internal links across homepage, tool pages, color pages, and blog.
- Fast Core Web Vitals.
- No indexable empty/thin placeholder pages.

### Schema types

Implement helpers in `src/utils/schema.ts`:

- `WebSite`
- `Organization`
- `BreadcrumbList`
- `SoftwareApplication` for tools where appropriate
- `FAQPage` for FAQ sections
- `Article` for blog pages

### `robots.txt`

Create:

```txt
User-agent: *
Allow: /

Sitemap: https://colorcompare.in/sitemap-index.xml
```

### Acceptance criteria

- View source contains metadata and schema.
- Sitemap includes key pages.
- No accidental noindex tags on production pages.

---

## Phase 10: Accessibility

### Goal

Make the site usable and trustworthy, especially because accessibility is part of the product promise.

### Requirements

- Keyboard navigable header and mobile menu.
- Visible focus states.
- Buttons use real `<button>` elements where actions happen.
- Links use `<a>` where navigation happens.
- Inputs have labels.
- Tool results announce important changes where useful.
- Text contrast should pass WCAG AA wherever possible.
- Do not rely only on color to indicate pass/fail.
- Add labels like `Pass`, `Fail`, `Warning`.

### Acceptance criteria

- Lighthouse accessibility score should be 95+.
- All interactive controls are reachable by keyboard.
- Color contrast issues are fixed.

---

## Phase 11: Performance

### Goal

Keep the site fast despite interactive tools and ads.

### Requirements

- Use Astro static HTML for all non-interactive sections.
- Hydrate only tool widgets.
- Prefer `client:visible` for below-fold interactive widgets.
- Avoid global React app.
- Avoid heavy animation libraries.
- Use CSS transitions instead of JS animation where possible.
- Optimize images.
- Keep homepage JavaScript minimal.
- Lazy load expensive browser-only logic like image color extraction.
- Reserve space for ads to reduce layout shift.

### Targets

- Lighthouse Performance: 90+
- First Contentful Paint: excellent on mobile
- CLS: under 0.1
- Main-thread JavaScript: minimal on homepage

### Acceptance criteria

- `npm run build` outputs mostly static HTML.
- Tool pages only ship JS required for that tool.
- Ads do not cause major layout shift.

---

## Phase 12: Analytics and Measurement

### Goal

Measure traffic and content/tool performance without overbuilding.

### Suggested metrics

- Pageviews by page type
- Tool starts/interactions
- Copy button clicks
- Palette generation clicks
- Top organic landing pages
- AdSense RPM by page type
- Search queries from Google Search Console

### Implementation note

Do not block launch on advanced analytics. At minimum, prepare the codebase so analytics can be added cleanly later.

Optional v1:

- Google Search Console verification meta
- Basic privacy-friendly analytics if desired

---

## Phase 13: Legal and Trust Pages

### Required pages

- `/privacy-policy/`
- `/terms/`
- `/contact/`
- `/about/`

### Privacy policy must mention

- AdSense / third-party advertising
- Cookies
- Analytics if added
- Browser-only image processing for Image Color Picker, if applicable
- Contact method

### About page positioning

Keep it simple:

```txt
ColorCompare is a free collection of color tools and resources for designers, developers, students, marketers, and creators.
```

No claim of premium product or paid plans.

---

## Phase 14: Launch Checklist

### Before production

- Replace AdSense publisher ID.
- Replace all placeholder ad slot IDs.
- Update `ads.txt`.
- Check all links.
- Check mobile navigation.
- Check every tool page.
- Run Lighthouse on homepage and key tool pages.
- Submit sitemap in Google Search Console.
- Verify AdSense policy-safe ad placement.
- Ensure no lorem ipsum remains.
- Ensure no premium plan copy exists.

### Commands

```bash
npm run check
npm run build
npm run preview
```

### Manual QA pages

- `/`
- `/tools/`
- `/tools/color-compare/`
- `/tools/contrast-checker/`
- `/colors/blue-palettes/`
- `/blog/color-theory-basics/`
- `/privacy-policy/`

---

## 15. AI Agent Execution Instructions

Use this section directly as the build prompt for the coding agent.

```txt
You are building ColorCompare from scratch using Astro, TypeScript, and Tailwind CSS.

Follow the implementation plan exactly.

Important constraints:
- Do not implement premium plans.
- Do not implement login.
- Do not implement payments.
- Do not add a database.
- Monetization is AdSense-only for now.
- Keep the site static-first and SEO-first.
- Use Astro components for static UI.
- Use client-side islands only for interactive tools.
- Keep homepage JS minimal.
- Make the design premium, colorful, clean, and mobile-first.

Build order:
1. Initialize Astro project.
2. Add Tailwind, sitemap, MDX.
3. Create global design tokens and base layout.
4. Build header/footer/SEO components.
5. Add AdSense components with env flags.
6. Build homepage sections.
7. Set up content collections.
8. Build dynamic tool pages.
9. Implement first 3 functional tools: Color Compare, Contrast Checker, Palette Generator.
10. Add remaining tool page shells with useful content.
11. Build color discovery pages.
12. Build blog pages.
13. Add schema, sitemap, robots.txt, ads.txt.
14. QA mobile, SEO, accessibility, and performance.

Do not stop after scaffolding. Implement production-quality components, real routing, real content examples, and working first tools.
```

---

## 16. Suggested MVP Scope

If time is limited, launch with this MVP:

### Must ship

- Homepage
- `/tools/`
- `/tools/color-compare/`
- `/tools/contrast-checker/`
- `/tools/palette-generator/`
- `/colors/blue-palettes/`
- `/colors/website-color-schemes/`
- `/blog/color-theory-basics/`
- `/privacy-policy/`
- `/about/`
- AdSense script and ad slot support
- Sitemap
- Robots.txt
- Schema basics

### Can ship next

- Image Color Picker
- Color Blindness Simulator
- More color pages
- More blog articles
- Advanced palette generation
- Better analytics events

---

## 17. Definition of Done

The build is complete when:

- The homepage visually matches the premium concept direction.
- All primary navigation links work.
- The first three tools are functional.
- Tool pages are SEO-friendly and not thin.
- AdSense can be enabled through env vars.
- Ads are not hardcoded into the UI when disabled.
- The site builds successfully.
- Sitemap and robots.txt are generated/available.
- Privacy policy includes advertising/cookie disclosure.
- Mobile experience is polished.
- No premium plan, subscription, login, or payment copy exists.

---

## 18. Source Notes

Implementation assumptions are aligned with current Astro docs: Astro projects use `src/`, `public/`, `package.json`, `astro.config.mjs`, and `tsconfig.json`; routes are created from `src/pages`; content collections are recommended for typed, scalable content; and the sitemap integration is available as an Astro integration.

AdSense implementation assumes Google AdSense display/Auto Ads usage with publisher client ID, ad slots, `ads.txt`, and safe ad placement with clear ad labels.
