export interface Palette {
  name: string;
  colors: string[];
  useCase?: string;
}

export interface ColorPageFaq {
  question: string;
  answer: string;
}

export interface ColorPage {
  title: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Accent gradient for the hero (CSS gradient token name or value). */
  accent: string;
  intro: string[];
  palettes: Palette[];
  bestUseCases: string[];
  designTips: string[];
  faqs: ColorPageFaq[];
  relatedColors: string[];
  relatedTools: string[];
}

export const colorPages: ColorPage[] = [
  {
    title: "Blue Palettes",
    slug: "blue-palettes",
    description:
      "Calm, trustworthy blue color palettes for websites, apps, and brands.",
    seoTitle: "Blue Color Palettes — Hex Codes for Web & Brand Design",
    seoDescription:
      "Explore curated blue color palettes with HEX codes — from corporate navy to fresh sky blue. Copy ready-to-use blue color schemes for web, UI, and branding.",
    heroTitle: "Blue color palettes",
    heroSubtitle:
      "Blue signals trust, calm, and competence — which is why it dominates tech, finance, and healthcare brands. Here are blue palettes you can copy in one click.",
    accent: "linear-gradient(135deg, #1d4ed8 0%, #16c8f3 100%)",
    intro: [
      "Blue is the world’s most popular color and the safest choice for brands that want to feel dependable. From the deep navy of banks to the bright cyan of fitness apps, blue flexes from serious to energetic depending on its lightness and saturation.",
      "The palettes below pair blues with neutrals and the occasional warm accent so they read as confident rather than cold. Copy any HEX value or the full palette to get started.",
    ],
    palettes: [
      {
        name: "Corporate Navy",
        colors: ["#0a2540", "#1d4ed8", "#3b82f6", "#93c5fd", "#f1f5f9"],
        useCase: "Finance, SaaS, and professional services",
      },
      {
        name: "Sky & Cyan",
        colors: ["#0c4a6e", "#0284c7", "#16c8f3", "#7dd3fc", "#ecfeff"],
        useCase: "Fitness, travel, and wellness apps",
      },
      {
        name: "Midnight Tech",
        colors: ["#0f172a", "#1e3a8a", "#3b82f6", "#60a5fa", "#e2e8f0"],
        useCase: "Dark-mode dashboards and developer tools",
      },
      {
        name: "Soft Powder Blue",
        colors: ["#1e40af", "#60a5fa", "#bfdbfe", "#dbeafe", "#f8fafc"],
        useCase: "Calm, editorial, and content-first sites",
      },
    ],
    bestUseCases: [
      "Technology and SaaS products that want to feel stable and modern.",
      "Finance, insurance, and healthcare brands where trust is essential.",
      "Travel, fitness, and wellness apps that lean on fresher, brighter blues.",
    ],
    designTips: [
      "Pair deep navy with a bright accent blue to create hierarchy without adding a second hue.",
      "Add a warm accent (coral or gold) sparingly to stop an all-blue design from feeling cold.",
      "Always check blue-on-blue text combinations in the Contrast Checker — low-contrast blues are a common accessibility trap.",
    ],
    faqs: [
      {
        question: "What colors go well with blue?",
        answer:
          "Blue pairs beautifully with neutral grays and whites, warm accents like coral, orange, or gold, and analogous colors such as teal and purple. For high energy, try its complement, orange.",
      },
      {
        question: "Why do so many tech companies use blue?",
        answer:
          "Blue is widely associated with trust, reliability, and calm. For products handling money or personal data, those associations help users feel secure.",
      },
    ],
    relatedColors: ["website-color-schemes", "ui-color-inspiration", "brand-color-ideas"],
    relatedTools: ["palette-generator", "contrast-checker", "shades-and-tints-generator"],
  },
  {
    title: "Black and Gold",
    slug: "black-and-gold",
    description:
      "Luxurious black and gold color combinations for premium and elegant brands.",
    seoTitle: "Black and Gold Color Palettes — Luxury Color Combinations",
    seoDescription:
      "Elegant black and gold color palettes with HEX codes. Perfect for luxury brands, weddings, packaging, and premium web design. Copy the combinations free.",
    heroTitle: "Black & gold color palettes",
    heroSubtitle:
      "Few combinations say ‘premium’ as instantly as black and gold. These palettes balance the drama of black with the warmth of gold for an upscale feel.",
    accent: "linear-gradient(135deg, #111111 0%, #d4af37 100%)",
    intro: [
      "Black and gold is the shorthand for luxury — used by jewelers, fashion houses, fine dining, and premium packaging. Black provides depth and sophistication while gold adds warmth, value, and a sense of celebration.",
      "The trick is restraint: gold works best as an accent against a generous field of black or off-white. The palettes below show several balanced takes on the combination.",
    ],
    palettes: [
      {
        name: "Classic Luxe",
        colors: ["#0a0a0a", "#1a1a1a", "#d4af37", "#e8c873", "#f5f0e1"],
        useCase: "Luxury brands, jewelry, and premium packaging",
      },
      {
        name: "Champagne & Onyx",
        colors: ["#121212", "#2b2b2b", "#c9a227", "#f7e7ce", "#ffffff"],
        useCase: "Weddings, events, and invitations",
      },
      {
        name: "Matte Black & Brass",
        colors: ["#181818", "#3a3a3a", "#b08d57", "#d6b77a", "#ece6da"],
        useCase: "Interior, lifestyle, and editorial brands",
      },
      {
        name: "Deep Espresso Gold",
        colors: ["#1c1611", "#2e2218", "#caa45d", "#e9d3a0", "#faf6ee"],
        useCase: "Coffee, spirits, and gourmet food",
      },
    ],
    bestUseCases: [
      "Luxury and premium brands that want an instantly upscale impression.",
      "Weddings, galas, and formal event branding.",
      "Packaging and print where gold can shine against deep black.",
    ],
    designTips: [
      "Use gold as an accent, not a fill — large gold areas can look cheap, while small touches feel rich.",
      "Choose an off-white or champagne rather than pure white to keep the palette warm and elegant.",
      "On screens, gold is just a warm yellow-brown; reserve true metallic gold for print and foil effects.",
    ],
    faqs: [
      {
        question: "What HEX code is gold?",
        answer:
          "There’s no single ‘gold’, but #d4af37 is a classic metallic gold. Warmer brass tones like #b08d57 or lighter champagne #f7e7ce also read as gold in the right context.",
      },
      {
        question: "Is black and gold good for web design?",
        answer:
          "Yes, for premium and luxury brands. Just watch contrast: gold text on black can be hard to read at small sizes, so test it in the Contrast Checker.",
      },
    ],
    relatedColors: ["wedding-color-palettes", "logo-color-combinations", "brand-color-ideas"],
    relatedTools: ["color-compare", "contrast-checker", "shades-and-tints-generator"],
  },
  {
    title: "Pastel Palettes",
    slug: "pastel-palettes",
    description:
      "Soft, gentle pastel color palettes for friendly and modern designs.",
    seoTitle: "Pastel Color Palettes — Soft Color Schemes with HEX Codes",
    seoDescription:
      "Browse soft pastel color palettes with HEX codes. Gentle, friendly color schemes for branding, weddings, kids’ products, and modern web design.",
    heroTitle: "Pastel color palettes",
    heroSubtitle:
      "Pastels feel soft, friendly, and calming. These muted, low-saturation palettes work beautifully for modern, approachable brands.",
    accent: "linear-gradient(135deg, #fbcfe8 0%, #bfdbfe 50%, #bbf7d0 100%)",
    intro: [
      "Pastels are colors with high lightness and low-to-medium saturation. They feel gentle and welcoming, which makes them popular for wellness, beauty, kids’ products, weddings, and friendly tech brands.",
      "Because pastels are inherently light, contrast is the main challenge. The palettes below pair multiple pastels with a darker neutral so text stays readable.",
    ],
    palettes: [
      {
        name: "Spring Garden",
        colors: ["#fbcfe8", "#fde68a", "#bbf7d0", "#bfdbfe", "#4b5563"],
        useCase: "Friendly, playful, and lifestyle brands",
      },
      {
        name: "Cotton Candy",
        colors: ["#fecdd3", "#fbcfe8", "#e9d5ff", "#c7d2fe", "#374151"],
        useCase: "Beauty, fashion, and kids’ products",
      },
      {
        name: "Muted Sorbet",
        colors: ["#fed7aa", "#fef3c7", "#d9f99d", "#a7f3d0", "#475569"],
        useCase: "Food, cafés, and seasonal campaigns",
      },
      {
        name: "Calm Pastel UI",
        colors: ["#e0e7ff", "#ede9fe", "#fae8ff", "#fce7f3", "#1f2937"],
        useCase: "Soft, modern app and dashboard backgrounds",
      },
    ],
    bestUseCases: [
      "Wellness, beauty, and self-care brands seeking a calm tone.",
      "Children’s products, stationery, and friendly illustrations.",
      "Modern apps that want a soft, low-stress interface.",
    ],
    designTips: [
      "Always include a dark neutral for text — pastel-on-pastel rarely meets contrast requirements.",
      "Limit yourself to three or four pastels so the palette feels intentional, not chaotic.",
      "Use pastels for large backgrounds and a single stronger color for key actions.",
    ],
    faqs: [
      {
        question: "What makes a color a pastel?",
        answer:
          "Pastels are light, soft colors — high in lightness and relatively low in saturation. Think of a vivid color mixed with a lot of white.",
      },
      {
        question: "How do I keep pastel designs accessible?",
        answer:
          "Pair pastels with a dark text color and verify the contrast ratio. Pastel text on pastel backgrounds usually fails WCAG AA, so reserve pastels for backgrounds and accents.",
      },
    ],
    relatedColors: ["wedding-color-palettes", "ui-color-inspiration", "website-color-schemes"],
    relatedTools: ["palette-generator", "contrast-checker", "color-compare"],
  },
  {
    title: "Website Color Schemes",
    slug: "website-color-schemes",
    description:
      "Practical, ready-to-use color schemes for modern websites and landing pages.",
    seoTitle: "Website Color Schemes — Modern Color Palettes for Web Design",
    seoDescription:
      "Ready-to-use website color schemes with HEX codes. Balanced palettes with primary, accent, and neutral colors for landing pages, SaaS, and portfolios.",
    heroTitle: "Website color schemes",
    heroSubtitle:
      "A great website palette needs a clear primary, a supporting accent, and reliable neutrals. These schemes are structured exactly that way.",
    accent: "linear-gradient(135deg, #6d5dfc 0%, #ff4fa3 100%)",
    intro: [
      "Effective website color schemes follow a simple structure: one dominant brand color, one accent for calls to action, and a set of neutrals for text, backgrounds, and borders. This keeps interfaces clear and guides the eye to what matters.",
      "Each scheme below lists colors in that order — primary, accent, then neutrals — so you can map them straight onto your buttons, links, and surfaces.",
    ],
    palettes: [
      {
        name: "Modern SaaS",
        colors: ["#6d5dfc", "#ff4fa3", "#0f172a", "#64748b", "#f8fafc"],
        useCase: "SaaS landing pages and product sites",
      },
      {
        name: "Fresh Startup",
        colors: ["#0ea5e9", "#22c55e", "#111827", "#6b7280", "#ffffff"],
        useCase: "Startups, marketing, and growth pages",
      },
      {
        name: "Warm & Editorial",
        colors: ["#ea580c", "#facc15", "#1c1917", "#78716c", "#fafaf9"],
        useCase: "Blogs, magazines, and personal brands",
      },
      {
        name: "Minimal Mono",
        colors: ["#111827", "#3b82f6", "#374151", "#9ca3af", "#f9fafb"],
        useCase: "Portfolios and minimalist agencies",
      },
    ],
    bestUseCases: [
      "Landing pages that need a clear primary action color.",
      "SaaS and product marketing sites with many UI states.",
      "Portfolios and blogs where neutrals carry most of the layout.",
    ],
    designTips: [
      "Use your accent color sparingly — ideally only on the most important buttons and links.",
      "Pick neutrals with a subtle hint of your brand hue for a more cohesive feel than pure gray.",
      "Test your primary button color against the background for at least 3:1 contrast.",
    ],
    faqs: [
      {
        question: "How many colors should a website use?",
        answer:
          "A common, reliable approach is one primary color, one accent, and two to three neutrals. The 60-30-10 rule — 60% dominant, 30% secondary, 10% accent — keeps the balance pleasant.",
      },
      {
        question: "What is the 60-30-10 rule?",
        answer:
          "It’s a balance guideline: use your dominant color for about 60% of a layout, a secondary color for 30%, and an accent for the final 10%. It prevents any one color from overwhelming the design.",
      },
    ],
    relatedColors: ["blue-palettes", "ui-color-inspiration", "brand-color-ideas"],
    relatedTools: ["palette-generator", "contrast-checker", "gradient-generator"],
  },
  {
    title: "Wedding Color Palettes",
    slug: "wedding-color-palettes",
    description:
      "Romantic and elegant wedding color palettes for every season and style.",
    seoTitle: "Wedding Color Palettes — Elegant Color Schemes with HEX Codes",
    seoDescription:
      "Beautiful wedding color palettes with HEX codes for invitations, décor, and styling. Seasonal and themed combinations from romantic blush to moody autumn.",
    heroTitle: "Wedding color palettes",
    heroSubtitle:
      "From blush-and-gold romance to moody autumn tones, these palettes help you style invitations, décor, and the whole celebration.",
    accent: "linear-gradient(135deg, #fbcfe8 0%, #d4af37 100%)",
    intro: [
      "A wedding palette ties everything together — invitations, flowers, table settings, attire, and signage. Choosing two or three core colors plus a metallic or neutral keeps the day feeling coordinated rather than busy.",
      "These palettes are grouped by mood and season so you can match them to your venue and time of year. Copy the HEX codes to share with stationers, florists, and planners.",
    ],
    palettes: [
      {
        name: "Blush & Gold Romance",
        colors: ["#f9d5d3", "#f6c1c0", "#d4af37", "#8a6d3b", "#fdfbf7"],
        useCase: "Classic, romantic spring weddings",
      },
      {
        name: "Sage & Cream",
        colors: ["#cdd5c4", "#a3b18a", "#e9e4d8", "#6b705c", "#fefdf9"],
        useCase: "Botanical and garden weddings",
      },
      {
        name: "Dusty Blue & Silver",
        colors: ["#b6c6d6", "#8aa1b6", "#dfe6ec", "#5b6b7a", "#ffffff"],
        useCase: "Elegant winter and coastal weddings",
      },
      {
        name: "Moody Autumn",
        colors: ["#7b2d26", "#b5651d", "#d9a566", "#3d2c29", "#f3ece3"],
        useCase: "Rich, romantic autumn celebrations",
      },
    ],
    bestUseCases: [
      "Invitations and save-the-dates that set the tone for the day.",
      "Florals, table linens, and décor coordination.",
      "Bridal party attire and accessory styling.",
    ],
    designTips: [
      "Choose two or three main colors, then add one metallic or neutral to tie them together.",
      "Match the palette’s mood to your season — soft pastels for spring, rich jewel tones for autumn and winter.",
      "Share exact HEX codes with vendors so printed and physical materials stay consistent.",
    ],
    faqs: [
      {
        question: "How many colors should a wedding palette have?",
        answer:
          "Two or three core colors plus a neutral or metallic is ideal. More than that becomes hard to coordinate across invitations, flowers, and décor.",
      },
      {
        question: "How do I choose a wedding color palette?",
        answer:
          "Start from a fixed element — the venue, the season, or a favorite flower — then build two or three complementary colors around it and add a neutral to balance them.",
      },
    ],
    relatedColors: ["pastel-palettes", "black-and-gold", "brand-color-ideas"],
    relatedTools: ["palette-generator", "color-compare", "shades-and-tints-generator"],
  },
  {
    title: "Logo Color Combinations",
    slug: "logo-color-combinations",
    description:
      "Bold, memorable color combinations that work for logos and brand marks.",
    seoTitle: "Logo Color Combinations — Best Color Pairs for Logos",
    seoDescription:
      "Memorable logo color combinations with HEX codes. Bold, versatile color pairs that stay recognizable in print, on screen, and in single-color versions.",
    heroTitle: "Logo color combinations",
    heroSubtitle:
      "A logo color needs to be distinctive, versatile, and legible everywhere. These combinations are built to stay recognizable across every context.",
    accent: "linear-gradient(135deg, #dc2626 0%, #facc15 100%)",
    intro: [
      "Logo colors carry a lot of weight — they appear on websites, business cards, apps, signage, and merchandise. The best logo palettes are simple (often just one or two colors), high in contrast, and able to survive being printed in a single color.",
      "These combinations balance personality with practicality. Each works on white, holds up in grayscale, and leaves room for a neutral system around it.",
    ],
    palettes: [
      {
        name: "Confident Red & Charcoal",
        colors: ["#dc2626", "#1f2937", "#f9fafb"],
        useCase: "Bold, energetic, attention-grabbing brands",
      },
      {
        name: "Tech Violet & Slate",
        colors: ["#6d5dfc", "#0f172a", "#e2e8f0"],
        useCase: "Modern software and digital products",
      },
      {
        name: "Fresh Green & Ink",
        colors: ["#16a34a", "#052e16", "#f0fdf4"],
        useCase: "Health, eco, and finance brands",
      },
      {
        name: "Sunny Orange & Navy",
        colors: ["#f97316", "#0a2540", "#fff7ed"],
        useCase: "Friendly, optimistic consumer brands",
      },
    ],
    bestUseCases: [
      "Primary brand marks that must work across many media.",
      "App icons that need to pop on a crowded home screen.",
      "Brands that want a strong single-color version for stamps and embossing.",
    ],
    designTips: [
      "Keep logo palettes to one or two colors — simplicity makes a mark more memorable and reproducible.",
      "Always test your logo in pure black and pure white to ensure it works without color.",
      "Pick colors with strong contrast against white so the mark stays crisp on most backgrounds.",
    ],
    faqs: [
      {
        question: "How many colors should a logo have?",
        answer:
          "Most strong logos use one or two colors. Fewer colors are easier to reproduce, cheaper to print, and more memorable.",
      },
      {
        question: "Should a logo work in black and white?",
        answer:
          "Yes. A logo should remain clear and recognizable in a single color, because it will appear in places — faxes, engravings, stamps — where color isn’t available.",
      },
    ],
    relatedColors: ["brand-color-ideas", "black-and-gold", "website-color-schemes"],
    relatedTools: ["color-compare", "contrast-checker", "palette-generator"],
  },
  {
    title: "Brand Color Ideas",
    slug: "brand-color-ideas",
    description:
      "Color palette ideas to express different brand personalities and moods.",
    seoTitle: "Brand Color Ideas — Color Palettes by Brand Personality",
    seoDescription:
      "Brand color palette ideas organized by personality — bold, calm, premium, playful. HEX codes included to help you choose colors that fit your brand.",
    heroTitle: "Brand color ideas",
    heroSubtitle:
      "Your colors are part of your brand voice. These palettes are organized by personality so you can pick a direction that matches how you want to feel.",
    accent: "linear-gradient(135deg, #6d5dfc 0%, #22c55e 100%)",
    intro: [
      "Color is one of the fastest ways a brand communicates personality before a single word is read. Energetic, calm, premium, or playful — the right palette sets expectations instantly.",
      "Use these personality-based palettes as starting points. Once you’ve chosen a direction, generate tints and shades from your primary color to build a full, usable system.",
    ],
    palettes: [
      {
        name: "Bold & Energetic",
        colors: ["#ef4444", "#f97316", "#facc15", "#1f2937", "#ffffff"],
        useCase: "Sports, entertainment, and youth brands",
      },
      {
        name: "Calm & Trustworthy",
        colors: ["#0ea5e9", "#38bdf8", "#0f172a", "#64748b", "#f8fafc"],
        useCase: "Finance, healthcare, and B2B",
      },
      {
        name: "Premium & Refined",
        colors: ["#1c1917", "#a8a29e", "#c9a227", "#f5f5f4", "#ffffff"],
        useCase: "Luxury, fashion, and hospitality",
      },
      {
        name: "Playful & Friendly",
        colors: ["#8b5cf6", "#ec4899", "#22d3ee", "#facc15", "#fdf4ff"],
        useCase: "Consumer apps, education, and lifestyle",
      },
    ],
    bestUseCases: [
      "Early-stage brands deciding on a visual direction.",
      "Rebrands that want to shift perceived personality.",
      "Sub-brands that need to feel distinct yet related.",
    ],
    designTips: [
      "Match color temperature to personality — warm colors energize, cool colors reassure.",
      "Commit to one primary color and build the rest of the system around it for consistency.",
      "Document HEX, RGB, and contrast pairings so everyone applies the brand the same way.",
    ],
    faqs: [
      {
        question: "How do colors affect brand perception?",
        answer:
          "Colors carry cultural and psychological associations — blue with trust, red with energy, green with growth, black with luxury. Choosing colors that match your message reinforces your brand at a glance.",
      },
      {
        question: "How do I pick a primary brand color?",
        answer:
          "Start from the personality you want to project, narrow to a color family that fits, then choose a specific shade that’s distinct from key competitors and works well in your interface.",
      },
    ],
    relatedColors: ["logo-color-combinations", "website-color-schemes", "blue-palettes"],
    relatedTools: ["palette-generator", "shades-and-tints-generator", "contrast-checker"],
  },
  {
    title: "UI Color Inspiration",
    slug: "ui-color-inspiration",
    description:
      "Interface-ready color palettes with surfaces, text, and accent colors.",
    seoTitle: "UI Color Inspiration — Interface Color Palettes with HEX Codes",
    seoDescription:
      "UI color palettes built for real interfaces — backgrounds, surfaces, text, and accents. Accessible HEX combinations for apps, dashboards, and design systems.",
    heroTitle: "UI color inspiration",
    heroSubtitle:
      "Interface palettes are different — they need background, surface, text, and accent roles that actually pass contrast. These are built for real products.",
    accent: "linear-gradient(135deg, #6d5dfc 0%, #16c8f3 100%)",
    intro: [
      "Designing UI color is about roles, not just hues. You need a page background, raised surfaces, primary and muted text, borders, and one or two accents — each chosen so the combinations remain readable.",
      "Each palette below is ordered by role: background, surface, text, muted, accent. They’re tuned so the text colors comfortably pass WCAG AA on their intended surfaces.",
    ],
    palettes: [
      {
        name: "Clean Light UI",
        colors: ["#f8fafc", "#ffffff", "#0f172a", "#64748b", "#6d5dfc"],
        useCase: "Default light-mode app interface",
      },
      {
        name: "Calm Dark UI",
        colors: ["#0f172a", "#1e293b", "#f1f5f9", "#94a3b8", "#38bdf8"],
        useCase: "Dark-mode dashboards and editors",
      },
      {
        name: "Warm Neutral UI",
        colors: ["#faf9f7", "#ffffff", "#1c1917", "#78716c", "#ea580c"],
        useCase: "Content and reading-focused products",
      },
      {
        name: "Fresh Product UI",
        colors: ["#f6fdf9", "#ffffff", "#052e16", "#4b5563", "#16a34a"],
        useCase: "Health, finance, and productivity apps",
      },
    ],
    bestUseCases: [
      "App and dashboard interfaces that need clear surface hierarchy.",
      "Design systems defining background, surface, text, and accent tokens.",
      "Dark-mode themes that must stay readable and low-glare.",
    ],
    designTips: [
      "Separate background and surface colors slightly so cards and panels feel raised.",
      "Use a muted text color for secondary content, but verify it still meets contrast on its surface.",
      "Reserve the accent color for interactive elements so users learn what’s clickable.",
    ],
    faqs: [
      {
        question: "What colors do I need for a UI palette?",
        answer:
          "At minimum: a background, a surface (for cards), a primary text color, a muted text color, and an accent for interactive elements. Borders and status colors round it out.",
      },
      {
        question: "How do I make a UI palette accessible?",
        answer:
          "Check each text color against the surface it sits on for at least 4.5:1 contrast (3:1 for large text), and make sure interactive elements and focus states meet 3:1 against their surroundings.",
      },
    ],
    relatedColors: ["website-color-schemes", "blue-palettes", "pastel-palettes"],
    relatedTools: ["contrast-checker", "palette-generator", "color-compare"],
  },
];

export const colorPagesBySlug: Record<string, ColorPage> = Object.fromEntries(
  colorPages.map((c) => [c.slug, c])
);

export function getColorPage(slug: string): ColorPage | undefined {
  return colorPagesBySlug[slug];
}

/** Pills shown on the homepage "Explore by Color & Use Case" section. */
export const explorePills: { label: string; href: string }[] = [
  { label: "Blue palettes", href: "/colors/blue-palettes/" },
  { label: "Black & gold", href: "/colors/black-and-gold/" },
  { label: "Website color schemes", href: "/colors/website-color-schemes/" },
  { label: "Wedding palettes", href: "/colors/wedding-color-palettes/" },
  { label: "Logo combinations", href: "/colors/logo-color-combinations/" },
  { label: "UI color inspiration", href: "/colors/ui-color-inspiration/" },
  { label: "Pastel palettes", href: "/colors/pastel-palettes/" },
  { label: "Brand color ideas", href: "/colors/brand-color-ideas/" },
];
