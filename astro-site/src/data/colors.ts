export interface Palette {
  name: string;
  colors: string[];
  useCase?: string;
}

export interface ColorPageFaq {
  question: string;
  answer: string;
}

/** Sections used to group palette pages on the /colors/ index. */
export type ColorSection =
  | "Color Families"
  | "Style & Mood"
  | "Seasons & Occasions"
  | "For Your Project";

export interface ColorPage {
  title: string;
  slug: string;
  /** Section the page belongs to on the palettes index. */
  section: ColorSection;
  /** Surfaced on the homepage "Explore by color" grid when true. */
  featured?: boolean;
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

/** Ordered sections with intro copy for the palettes index page. */
export const colorSections: { title: ColorSection; description: string }[] = [
  {
    title: "Color Families",
    description:
      "Palettes built around a single dominant hue — pick the color you want to lead with.",
  },
  {
    title: "Style & Mood",
    description:
      "Palettes defined by a feeling or aesthetic, from minimalist to bold and retro.",
  },
  {
    title: "Seasons & Occasions",
    description:
      "Seasonal and event-driven color schemes for campaigns, holidays, and celebrations.",
  },
  {
    title: "For Your Project",
    description:
      "Role-based palettes ready to map onto websites, UIs, logos, and brand systems.",
  },
];

export const colorPages: ColorPage[] = [
  {
    title: "Blue Palettes",
    slug: "blue-palettes",
    section: "Color Families",
    featured: true,
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
    section: "Style & Mood",
    featured: true,
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
    section: "Style & Mood",
    featured: true,
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
    section: "For Your Project",
    featured: true,
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
    section: "Seasons & Occasions",
    featured: true,
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
    section: "For Your Project",
    featured: true,
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
    section: "For Your Project",
    featured: true,
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
    section: "For Your Project",
    featured: true,
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

  // ─── Color Families ───────────────────────────────────────────────
  {
    title: "Green Palettes",
    slug: "green-palettes",
    section: "Color Families",
    description:
      "Fresh, natural green color palettes for eco, health, and finance brands.",
    seoTitle: "Green Color Palettes — Hex Codes for Nature & Eco Design",
    seoDescription:
      "Explore green color palettes with HEX codes — from deep forest to bright mint. Copy ready-to-use green color schemes for eco, health, finance, and web design.",
    heroTitle: "Green color palettes",
    heroSubtitle:
      "Green signals growth, health, and nature — the go-to hue for eco, wellness, and finance brands. Copy these green palettes in one click.",
    accent: "linear-gradient(135deg, #166534 0%, #4ade80 100%)",
    intro: [
      "Green sits between cool and warm on the wheel, which lets it feel both calming and energetic depending on the shade. Deep forest greens read as established and premium, while bright mints and limes feel fresh, modern, and approachable.",
      "The palettes below pair greens with neutral and earthy supporting colors so they feel natural rather than artificial. Copy any HEX value or the full palette to get started.",
    ],
    palettes: [
      {
        name: "Forest & Sage",
        colors: ["#14532d", "#166534", "#4d7c0f", "#a3b18a", "#f0fdf4"],
        useCase: "Eco, outdoor, and sustainability brands",
      },
      {
        name: "Emerald Tech",
        colors: ["#064e3b", "#059669", "#10b981", "#6ee7b7", "#ecfdf5"],
        useCase: "Fintech, health, and productivity apps",
      },
      {
        name: "Fresh Mint",
        colors: ["#065f46", "#34d399", "#6ee7b7", "#a7f3d0", "#f0fdfa"],
        useCase: "Wellness, beauty, and food brands",
      },
      {
        name: "Olive & Moss",
        colors: ["#3f6212", "#65a30d", "#a3a847", "#d9d2b0", "#faf9f0"],
        useCase: "Organic, artisanal, and earthy brands",
      },
    ],
    bestUseCases: [
      "Eco, sustainability, and outdoor brands that want to feel natural.",
      "Health, wellness, and finance products that lean on growth and trust.",
      "Food and beverage brands signalling freshness and natural ingredients.",
    ],
    designTips: [
      "Pair a deep forest green with a brighter accent green to build hierarchy within one hue.",
      "Add a warm neutral or earthy brown to keep an all-green palette grounded rather than clinical.",
      "Bright greens vibrate against pure white — verify text contrast in the Contrast Checker before shipping.",
    ],
    faqs: [
      {
        question: "What colors go well with green?",
        answer:
          "Green pairs naturally with earthy browns, warm neutrals, and creams, and contrasts beautifully with its complement, red. For a fresh look, combine it with white and a hint of yellow.",
      },
      {
        question: "What does the color green represent?",
        answer:
          "Green is widely associated with nature, growth, health, and money. Deeper greens feel premium and stable, while brighter greens feel fresh, youthful, and energetic.",
      },
    ],
    relatedColors: ["teal-palettes", "earth-tone-palettes", "nature-color-palettes"],
    relatedTools: ["palette-generator", "shades-and-tints-generator", "contrast-checker"],
  },
  {
    title: "Red Palettes",
    slug: "red-palettes",
    section: "Color Families",
    description:
      "Bold, energetic red color palettes for brands that want to grab attention.",
    seoTitle: "Red Color Palettes — Hex Codes for Bold, Energetic Design",
    seoDescription:
      "Browse red color palettes with HEX codes — from punchy crimson to warm coral. Copy energetic red color schemes for branding, sales, food, and web design.",
    heroTitle: "Red color palettes",
    heroSubtitle:
      "Red is the color of energy, urgency, and appetite. These palettes harness its power while keeping it balanced and usable.",
    accent: "linear-gradient(135deg, #991b1b 0%, #f87171 100%)",
    intro: [
      "Red is the most attention-grabbing color in the spectrum — it raises the pulse, signals importance, and stimulates appetite. That power is also why it needs restraint: too much red feels aggressive, while a well-placed accent feels confident.",
      "The palettes below balance reds with deep neutrals and soft off-whites so the red stays the star without overwhelming the layout. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Confident Crimson",
        colors: ["#7f1d1d", "#dc2626", "#ef4444", "#1f2937", "#f9fafb"],
        useCase: "Sales, sports, and bold consumer brands",
      },
      {
        name: "Warm Coral",
        colors: ["#9f1239", "#f43f5e", "#fb7185", "#fecdd3", "#fff1f2"],
        useCase: "Lifestyle, beauty, and friendly brands",
      },
      {
        name: "Brick & Clay",
        colors: ["#7c2d12", "#b91c1c", "#c2410c", "#e7e5e4", "#fef2f2"],
        useCase: "Food, hospitality, and rustic brands",
      },
      {
        name: "Cherry & Ink",
        colors: ["#450a0a", "#991b1b", "#ef4444", "#fca5a5", "#fee2e2"],
        useCase: "Premium, dramatic, and editorial brands",
      },
    ],
    bestUseCases: [
      "Sales, clearance, and call-to-action moments that need urgency.",
      "Food and restaurant brands that want to stimulate appetite.",
      "Bold, confident brands in sports, entertainment, and media.",
    ],
    designTips: [
      "Use red for the single most important action on a page — overusing it dilutes its urgency.",
      "Anchor red with a dark neutral like charcoal or ink so the palette feels intentional, not loud.",
      "Red-on-red and red-on-orange pairings can clash; compare candidates side by side before committing.",
    ],
    faqs: [
      {
        question: "What colors go well with red?",
        answer:
          "Red pairs strongly with neutrals like charcoal, cream, and white, and contrasts with its complement, green. Navy and gold also make red feel more premium and grounded.",
      },
      {
        question: "Why is red used for sales and calls to action?",
        answer:
          "Red draws the eye faster than almost any other color and carries associations with urgency and importance, which is why it works well for buttons, sale tags, and alerts.",
      },
    ],
    relatedColors: ["orange-palettes", "pink-palettes", "vibrant-bold-palettes"],
    relatedTools: ["color-compare", "contrast-checker", "palette-generator"],
  },
  {
    title: "Purple Palettes",
    slug: "purple-palettes",
    section: "Color Families",
    description:
      "Creative, luxurious purple color palettes for premium and imaginative brands.",
    seoTitle: "Purple Color Palettes — Hex Codes for Creative & Luxury Design",
    seoDescription:
      "Explore purple color palettes with HEX codes — from deep royal violet to soft lavender. Copy creative purple color schemes for branding, beauty, and web design.",
    heroTitle: "Purple color palettes",
    heroSubtitle:
      "Purple blends the calm of blue with the energy of red, making it the color of creativity, luxury, and imagination.",
    accent: "linear-gradient(135deg, #6b21a8 0%, #c084fc 100%)",
    intro: [
      "Purple has long been tied to royalty and luxury because the dye was historically rare and expensive. Today it signals creativity, wisdom, and a premium feel — popular with beauty, tech, and creative brands.",
      "These palettes range from deep, regal violets to airy lavenders. Each is balanced with neutrals so the purple feels refined rather than overwhelming. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Royal Violet",
        colors: ["#3b0764", "#6b21a8", "#9333ea", "#c084fc", "#faf5ff"],
        useCase: "Premium, creative, and beauty brands",
      },
      {
        name: "Tech Indigo",
        colors: ["#312e81", "#4f46e5", "#818cf8", "#c7d2fe", "#eef2ff"],
        useCase: "Software, fintech, and SaaS products",
      },
      {
        name: "Soft Lavender",
        colors: ["#7e22ce", "#a855f7", "#d8b4fe", "#ede9fe", "#faf5ff"],
        useCase: "Wellness, weddings, and lifestyle brands",
      },
      {
        name: "Plum & Mauve",
        colors: ["#581c87", "#86198f", "#c026d3", "#e9d5ff", "#fdf4ff"],
        useCase: "Fashion, events, and editorial design",
      },
    ],
    bestUseCases: [
      "Beauty, cosmetics, and self-care brands seeking a premium feel.",
      "Creative agencies, tech, and innovation-led products.",
      "Luxury and lifestyle brands that want imagination and refinement.",
    ],
    designTips: [
      "Deep purples read as luxurious; lighter lavenders feel calm and approachable — pick by mood.",
      "Pair purple with a warm metallic or soft gold accent to amplify the premium feel.",
      "Generate tints and shades from one violet to build a consistent, usable scale for UI.",
    ],
    faqs: [
      {
        question: "What colors go well with purple?",
        answer:
          "Purple pairs elegantly with neutrals like gray and cream, warm metallics like gold, and analogous blues and pinks. For high contrast, try its complement, yellow-green.",
      },
      {
        question: "What does the color purple represent?",
        answer:
          "Purple is associated with luxury, creativity, wisdom, and imagination. It carries a regal, premium feel thanks to its historical rarity as a dye.",
      },
    ],
    relatedColors: ["pink-palettes", "blue-palettes", "brand-color-ideas"],
    relatedTools: ["palette-generator", "shades-and-tints-generator", "color-compare"],
  },
  {
    title: "Orange Palettes",
    slug: "orange-palettes",
    section: "Color Families",
    description:
      "Warm, friendly orange color palettes for energetic and approachable brands.",
    seoTitle: "Orange Color Palettes — Hex Codes for Warm, Friendly Design",
    seoDescription:
      "Browse orange color palettes with HEX codes — from bright tangerine to warm terracotta. Copy friendly orange color schemes for branding, food, and web design.",
    heroTitle: "Orange color palettes",
    heroSubtitle:
      "Orange is warm, optimistic, and energetic without the urgency of red. These palettes feel friendly, confident, and approachable.",
    accent: "linear-gradient(135deg, #c2410c 0%, #fb923c 100%)",
    intro: [
      "Orange combines the energy of red with the cheerfulness of yellow, landing on a color that feels friendly and confident rather than aggressive. It's a favorite for consumer, food, and youth-focused brands.",
      "The palettes below pair orange with deep neutrals and warm creams so it stays inviting and readable. Copy any HEX value or the full palette to use it in your project.",
    ],
    palettes: [
      {
        name: "Bright Tangerine",
        colors: ["#9a3412", "#ea580c", "#f97316", "#fdba74", "#fff7ed"],
        useCase: "Consumer apps, food, and youth brands",
      },
      {
        name: "Warm Terracotta",
        colors: ["#7c2d12", "#c2410c", "#e07856", "#e7c8a0", "#faf3ec"],
        useCase: "Lifestyle, ceramics, and artisanal brands",
      },
      {
        name: "Sunset Amber",
        colors: ["#b45309", "#f59e0b", "#fbbf24", "#fde68a", "#fffbeb"],
        useCase: "Travel, hospitality, and seasonal campaigns",
      },
      {
        name: "Orange & Navy",
        colors: ["#ea580c", "#fb923c", "#0a2540", "#475569", "#fff7ed"],
        useCase: "Optimistic, sporty consumer brands",
      },
    ],
    bestUseCases: [
      "Friendly consumer brands that want energy without aggression.",
      "Food, snack, and beverage brands signalling warmth and appetite.",
      "Calls to action that need to feel inviting rather than urgent.",
    ],
    designTips: [
      "Pair orange with a deep navy or charcoal for a confident, balanced contrast.",
      "Shift toward terracotta and amber for a warmer, more grounded, artisanal feel.",
      "Orange text rarely passes contrast on white — reserve it for fills and large elements.",
    ],
    faqs: [
      {
        question: "What colors go well with orange?",
        answer:
          "Orange pairs beautifully with navy and charcoal for contrast, with warm creams and browns for harmony, and with its complement, blue, for high energy.",
      },
      {
        question: "What does the color orange represent?",
        answer:
          "Orange conveys warmth, optimism, friendliness, and confidence. It's energetic like red but feels more approachable and playful.",
      },
    ],
    relatedColors: ["red-palettes", "autumn-color-palettes", "earth-tone-palettes"],
    relatedTools: ["palette-generator", "contrast-checker", "color-compare"],
  },
  {
    title: "Pink Palettes",
    slug: "pink-palettes",
    section: "Color Families",
    description:
      "Playful and elegant pink color palettes for beauty, lifestyle, and modern brands.",
    seoTitle: "Pink Color Palettes — Hex Codes for Playful & Elegant Design",
    seoDescription:
      "Explore pink color palettes with HEX codes — from soft blush to vivid magenta. Copy playful and elegant pink color schemes for beauty, branding, and web design.",
    heroTitle: "Pink color palettes",
    heroSubtitle:
      "Pink ranges from soft and romantic to bold and electric. These palettes show how versatile it is across beauty, lifestyle, and tech.",
    accent: "linear-gradient(135deg, #be185d 0%, #f9a8d4 100%)",
    intro: [
      "Pink is far more versatile than its reputation suggests. Soft blush pinks feel calm and romantic, while hot pinks and magentas feel modern, bold, and energetic — used by everyone from beauty brands to tech startups.",
      "These palettes span the full range and pair pink with neutrals so it reads as intentional, not saccharine. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Soft Blush",
        colors: ["#9d174d", "#f472b6", "#f9a8d4", "#fbcfe8", "#fdf2f8"],
        useCase: "Beauty, weddings, and lifestyle brands",
      },
      {
        name: "Electric Magenta",
        colors: ["#831843", "#db2777", "#ec4899", "#f9a8d4", "#1f2937"],
        useCase: "Bold tech, fashion, and youth brands",
      },
      {
        name: "Rose & Cream",
        colors: ["#9f1239", "#e11d48", "#fb7185", "#fecdd3", "#fff1f2"],
        useCase: "Romantic, editorial, and boutique brands",
      },
      {
        name: "Dusty Mauve Pink",
        colors: ["#86198f", "#c084a8", "#d8a7c0", "#ecd4e0", "#fdf4f8"],
        useCase: "Calm, modern, and feminine lifestyle brands",
      },
    ],
    bestUseCases: [
      "Beauty, cosmetics, and self-care brands across the soft-to-bold range.",
      "Bold fashion and tech brands using hot pink as a signature accent.",
      "Romantic and lifestyle brands seeking warmth and personality.",
    ],
    designTips: [
      "Pair a vivid pink with a dark neutral so it pops without feeling overwhelming.",
      "Soft blush works best as a background; reserve a stronger pink for key actions.",
      "Pink and red sit close on the wheel — compare them side by side to avoid muddy clashes.",
    ],
    faqs: [
      {
        question: "What colors go well with pink?",
        answer:
          "Pink pairs well with neutral grays and creams, deep navy or charcoal for contrast, and analogous purples and reds. Gold accents make pink feel more premium.",
      },
      {
        question: "Is pink only for feminine brands?",
        answer:
          "No. Bold magentas and hot pinks are widely used by tech, music, and lifestyle brands of every kind. Pink's meaning depends entirely on its shade and how it's paired.",
      },
    ],
    relatedColors: ["red-palettes", "purple-palettes", "pastel-palettes"],
    relatedTools: ["palette-generator", "color-compare", "contrast-checker"],
  },
  {
    title: "Teal Palettes",
    slug: "teal-palettes",
    section: "Color Families",
    description:
      "Balanced teal and turquoise color palettes that blend calm blue with fresh green.",
    seoTitle: "Teal Color Palettes — Hex Codes for Fresh, Balanced Design",
    seoDescription:
      "Browse teal and turquoise color palettes with HEX codes. Copy calm, modern teal color schemes for wellness, tech, travel, and web design.",
    heroTitle: "Teal color palettes",
    heroSubtitle:
      "Teal sits between blue and green, combining trust with freshness. These palettes feel calm, modern, and clean.",
    accent: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
    intro: [
      "Teal blends the dependability of blue with the freshness of green, producing a color that feels modern, calm, and clean. It's a favorite for wellness, travel, and tech brands that want to feel both trustworthy and approachable.",
      "These palettes pair teal with crisp neutrals and the occasional warm accent so it stays vibrant without going cold. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Deep Teal",
        colors: ["#134e4a", "#0f766e", "#14b8a6", "#5eead4", "#f0fdfa"],
        useCase: "Wellness, finance, and professional brands",
      },
      {
        name: "Turquoise Coast",
        colors: ["#155e75", "#0891b2", "#22d3ee", "#a5f3fc", "#ecfeff"],
        useCase: "Travel, swimwear, and lifestyle brands",
      },
      {
        name: "Teal & Coral",
        colors: ["#0f766e", "#2dd4bf", "#fb7185", "#fed7aa", "#f0fdfa"],
        useCase: "Friendly, energetic consumer brands",
      },
      {
        name: "Muted Teal UI",
        colors: ["#0d3b3a", "#1e5f5b", "#4a8f8a", "#bcd6d3", "#f5fafa"],
        useCase: "Calm dashboards and modern interfaces",
      },
    ],
    bestUseCases: [
      "Wellness, healthcare, and finance brands that want calm and trust.",
      "Travel, coastal, and lifestyle brands evoking water and freshness.",
      "Modern interfaces that need a fresh alternative to plain blue.",
    ],
    designTips: [
      "Use a warm coral or orange accent to make a teal palette feel lively rather than cold.",
      "Deepen teal toward the dark end for text and use brighter turquoise for highlights.",
      "Teal and blue can read as similar on small screens — compare them to keep contrast clear.",
    ],
    faqs: [
      {
        question: "What colors go well with teal?",
        answer:
          "Teal pairs beautifully with warm accents like coral, orange, and gold, with crisp white and gray neutrals, and with analogous blues and greens for a calm scheme.",
      },
      {
        question: "What's the difference between teal and turquoise?",
        answer:
          "Both blend blue and green, but teal is deeper and more muted, while turquoise is brighter and leans more toward cyan. Teal feels professional; turquoise feels playful.",
      },
    ],
    relatedColors: ["blue-palettes", "green-palettes", "ui-color-inspiration"],
    relatedTools: ["palette-generator", "contrast-checker", "shades-and-tints-generator"],
  },
  {
    title: "Earth Tone Palettes",
    slug: "earth-tone-palettes",
    section: "Color Families",
    description:
      "Warm, grounded earth tone palettes built from browns, ochres, and natural neutrals.",
    seoTitle: "Earth Tone Color Palettes — Hex Codes for Warm, Natural Design",
    seoDescription:
      "Explore earth tone color palettes with HEX codes — browns, terracotta, ochre, and sand. Copy warm, natural color schemes for organic and artisanal brands.",
    heroTitle: "Earth tone palettes",
    heroSubtitle:
      "Earth tones feel warm, grounded, and timeless. Built from browns, clays, and natural neutrals, they suit organic and artisanal brands.",
    accent: "linear-gradient(135deg, #78350f 0%, #d6a77a 100%)",
    intro: [
      "Earth tones are the colors of soil, stone, clay, and wood — warm, muted, and deeply natural. They feel grounded and timeless, which is why they're favored by organic, artisanal, and interior brands.",
      "These palettes blend browns, terracottas, ochres, and sandy neutrals into cohesive, low-saturation schemes. Copy any HEX value or the full palette to bring warmth to your design.",
    ],
    palettes: [
      {
        name: "Clay & Sand",
        colors: ["#78350f", "#b45309", "#d6a77a", "#e7d3b3", "#faf6ee"],
        useCase: "Organic, ceramic, and artisanal brands",
      },
      {
        name: "Warm Taupe",
        colors: ["#44403c", "#78716c", "#a8a29e", "#d6d3d1", "#f5f5f4"],
        useCase: "Interior, fashion, and minimalist brands",
      },
      {
        name: "Ochre & Olive",
        colors: ["#713f12", "#a16207", "#ca8a04", "#a3a847", "#faf9f0"],
        useCase: "Heritage, food, and outdoor brands",
      },
      {
        name: "Desert Rust",
        colors: ["#7c2d12", "#9a3412", "#c2734a", "#dcae8a", "#f7ede3"],
        useCase: "Rustic, travel, and lifestyle brands",
      },
    ],
    bestUseCases: [
      "Organic, sustainable, and artisanal brands that want a natural feel.",
      "Interior, furniture, and lifestyle brands evoking warmth and craft.",
      "Heritage and food brands that benefit from a timeless, grounded look.",
    ],
    designTips: [
      "Keep saturation low — earth tones lose their natural feel when colors get too bright.",
      "Layer several warm neutrals of different lightness to create depth without adding new hues.",
      "Add a single deeper accent (rust or ochre) so the palette has a clear focal point.",
    ],
    faqs: [
      {
        question: "What are earth tone colors?",
        answer:
          "Earth tones are warm, muted colors drawn from nature — browns, terracotta, ochre, olive, sand, and clay. They tend to be low in saturation and feel grounded and organic.",
      },
      {
        question: "What colors go well with earth tones?",
        answer:
          "Earth tones pair well with cream and off-white neutrals, deep forest greens, and muted blues. A small touch of brass or gold adds warmth and richness.",
      },
    ],
    relatedColors: ["neutral-palettes", "autumn-color-palettes", "green-palettes"],
    relatedTools: ["palette-generator", "shades-and-tints-generator", "color-compare"],
  },
  {
    title: "Neutral Palettes",
    slug: "neutral-palettes",
    section: "Color Families",
    description:
      "Versatile neutral color palettes — grays, beiges, and off-whites for any design.",
    seoTitle: "Neutral Color Palettes — Hex Codes for Gray & Beige Schemes",
    seoDescription:
      "Browse neutral color palettes with HEX codes — warm beiges, cool grays, and off-whites. Copy versatile neutral color schemes for minimal, modern web design.",
    heroTitle: "Neutral color palettes",
    heroSubtitle:
      "Neutrals are the backbone of every design. These gray, beige, and off-white palettes give your layouts structure and calm.",
    accent: "linear-gradient(135deg, #44403c 0%, #d6d3d1 100%)",
    intro: [
      "Neutrals do most of the work in any design — backgrounds, surfaces, text, and borders all lean on them. Choosing the right neutral temperature (warm beige vs cool gray) quietly sets the tone of an entire interface.",
      "These palettes give you complete neutral systems, from near-black to off-white, in both warm and cool directions. Copy any HEX value or the full palette as the foundation for your design.",
    ],
    palettes: [
      {
        name: "Cool Gray Scale",
        colors: ["#111827", "#374151", "#6b7280", "#d1d5db", "#f9fafb"],
        useCase: "Modern, minimal, and tech interfaces",
      },
      {
        name: "Warm Greige",
        colors: ["#292524", "#57534e", "#a8a29e", "#e7e5e4", "#fafaf9"],
        useCase: "Editorial, lifestyle, and reading-focused sites",
      },
      {
        name: "Soft Beige",
        colors: ["#44403c", "#857a6a", "#c4b9a6", "#e8e0d2", "#faf7f0"],
        useCase: "Warm, calm, and organic brands",
      },
      {
        name: "Slate & Stone",
        colors: ["#0f172a", "#334155", "#64748b", "#cbd5e1", "#f1f5f9"],
        useCase: "Professional dashboards and SaaS UIs",
      },
    ],
    bestUseCases: [
      "Foundations for any palette — backgrounds, surfaces, text, and borders.",
      "Minimalist and editorial designs that let content lead.",
      "Design systems that need consistent gray and beige scales.",
    ],
    designTips: [
      "Commit to one temperature — mixing warm beige with cool gray often looks muddy.",
      "Tint your neutrals slightly toward your brand hue for a more cohesive, custom feel.",
      "Keep enough lightness steps between background, surface, and border so layers read clearly.",
    ],
    faqs: [
      {
        question: "What counts as a neutral color?",
        answer:
          "Neutrals are low-saturation colors — blacks, grays, whites, beiges, and taupes. They can lean warm or cool depending on the hint of hue mixed into them.",
      },
      {
        question: "Are warm or cool neutrals better?",
        answer:
          "Neither is better — it depends on mood. Warm beiges and greiges feel cozy and editorial, while cool grays feel modern and technical. Pick the temperature that matches your brand.",
      },
    ],
    relatedColors: ["earth-tone-palettes", "minimalist-palettes", "monochromatic-palettes"],
    relatedTools: ["shades-and-tints-generator", "palette-generator", "contrast-checker"],
  },
  {
    title: "Monochromatic Palettes",
    slug: "monochromatic-palettes",
    section: "Color Families",
    description:
      "Single-hue monochromatic palettes built from tints, tones, and shades of one color.",
    seoTitle: "Monochromatic Color Palettes — One-Hue Schemes with HEX Codes",
    seoDescription:
      "Explore monochromatic color palettes with HEX codes — clean, cohesive schemes built from a single hue. Copy one-color palettes for minimal, modern design.",
    heroTitle: "Monochromatic color palettes",
    heroSubtitle:
      "A monochromatic palette uses one hue across many tints and shades. The result is clean, cohesive, and effortlessly elegant.",
    accent: "linear-gradient(135deg, #1e3a8a 0%, #93c5fd 100%)",
    intro: [
      "Monochromatic palettes are built from a single hue, varied only by lightness and saturation. Because every color shares the same base, the result is always harmonious — there's no risk of clashing.",
      "These single-color scales work beautifully for minimal interfaces, data visualization, and brands that want a focused, sophisticated look. Copy any HEX value or build your own with the Shades & Tints Generator.",
    ],
    palettes: [
      {
        name: "Monochrome Blue",
        colors: ["#172554", "#1e40af", "#3b82f6", "#93c5fd", "#dbeafe"],
        useCase: "Calm, focused, single-hue interfaces",
      },
      {
        name: "Monochrome Green",
        colors: ["#14532d", "#166534", "#22c55e", "#86efac", "#dcfce7"],
        useCase: "Fresh, natural, single-hue branding",
      },
      {
        name: "Monochrome Purple",
        colors: ["#3b0764", "#7e22ce", "#a855f7", "#d8b4fe", "#f3e8ff"],
        useCase: "Creative and premium single-hue designs",
      },
      {
        name: "Monochrome Gray",
        colors: ["#111827", "#374151", "#6b7280", "#9ca3af", "#e5e7eb"],
        useCase: "Minimal, timeless, and neutral layouts",
      },
    ],
    bestUseCases: [
      "Minimalist designs that want a calm, focused, single-color identity.",
      "Data visualization where one hue maps cleanly to value or intensity.",
      "Brands seeking a sophisticated, low-risk palette that always harmonizes.",
    ],
    designTips: [
      "Vary lightness boldly between steps so elements stay distinct within one hue.",
      "Add a single neutral (black, white, or gray) to give the eye a place to rest.",
      "Because hue never changes, contrast comes entirely from lightness — test text pairs carefully.",
    ],
    faqs: [
      {
        question: "What is a monochromatic color scheme?",
        answer:
          "A monochromatic scheme uses a single hue varied only by tints (lighter), shades (darker), and tones (less saturated). Every color shares the same base hue, so the palette is always cohesive.",
      },
      {
        question: "How do I build a monochromatic palette?",
        answer:
          "Pick one base color and generate lighter tints and darker shades from it. The Shades & Tints Generator does this instantly, giving you a full single-hue scale to choose from.",
      },
    ],
    relatedColors: ["neutral-palettes", "minimalist-palettes", "blue-palettes"],
    relatedTools: ["shades-and-tints-generator", "palette-generator", "color-compare"],
  },

  // ─── Style & Mood ─────────────────────────────────────────────────
  {
    title: "Dark Mode Palettes",
    slug: "dark-mode-palettes",
    section: "Style & Mood",
    description:
      "Low-glare dark mode color palettes with backgrounds, surfaces, text, and accents.",
    seoTitle: "Dark Mode Color Palettes — Hex Codes for Dark UI Design",
    seoDescription:
      "Browse dark mode color palettes with HEX codes — backgrounds, surfaces, text, and accents tuned for readability. Copy accessible dark UI color schemes.",
    heroTitle: "Dark mode color palettes",
    heroSubtitle:
      "Great dark mode isn't just black — it's layered surfaces, softened text, and carefully tuned accents. These palettes are built for real dark UIs.",
    accent: "linear-gradient(135deg, #0f172a 0%, #38bdf8 100%)",
    intro: [
      "Effective dark mode design avoids pure black. Instead it uses a very dark base with slightly lighter surfaces stacked on top, softened off-white text rather than pure white, and accents that stay vivid without glaring.",
      "Each palette below is ordered by role: background, surface, primary text, muted text, and accent — tuned so the combinations stay readable and easy on the eyes. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Slate Dark",
        colors: ["#0f172a", "#1e293b", "#f1f5f9", "#94a3b8", "#38bdf8"],
        useCase: "Default dark-mode app interface",
      },
      {
        name: "True Dark",
        colors: ["#0a0a0a", "#1a1a1a", "#ededed", "#a1a1aa", "#22c55e"],
        useCase: "OLED-friendly, near-black interfaces",
      },
      {
        name: "Warm Charcoal",
        colors: ["#1c1917", "#292524", "#f5f5f4", "#a8a29e", "#fb923c"],
        useCase: "Cozy, content-focused dark themes",
      },
      {
        name: "Midnight Indigo",
        colors: ["#1e1b4b", "#312e81", "#e0e7ff", "#a5b4fc", "#818cf8"],
        useCase: "Premium, branded dark experiences",
      },
    ],
    bestUseCases: [
      "Dark-mode themes for apps, dashboards, and developer tools.",
      "OLED-targeted interfaces where near-black saves battery.",
      "Reading and content apps that want a low-glare night experience.",
    ],
    designTips: [
      "Avoid pure black backgrounds — a very dark gray reduces harsh contrast and eye strain.",
      "Use off-white (not #ffffff) for body text to soften glare on dark surfaces.",
      "Desaturate accents slightly so they stay vivid without vibrating against the dark base.",
    ],
    faqs: [
      {
        question: "Should dark mode use pure black?",
        answer:
          "Usually not. A very dark gray like #0f172a or #1a1a1a is easier on the eyes and lets you layer lighter surfaces on top. Pure black is best reserved for OLED battery savings.",
      },
      {
        question: "How do I keep dark mode accessible?",
        answer:
          "Use softened off-white text instead of pure white, keep at least 4.5:1 contrast for body text, and verify accent colors against the dark background in the Contrast Checker.",
      },
    ],
    relatedColors: ["ui-color-inspiration", "monochromatic-palettes", "blue-palettes"],
    relatedTools: ["contrast-checker", "shades-and-tints-generator", "color-blindness-simulator"],
  },
  {
    title: "Vintage & Retro Palettes",
    slug: "vintage-retro-palettes",
    section: "Style & Mood",
    description:
      "Nostalgic vintage and retro color palettes inspired by past decades.",
    seoTitle: "Vintage & Retro Color Palettes — Nostalgic Hex Code Schemes",
    seoDescription:
      "Explore vintage and retro color palettes with HEX codes — muted 70s tones, bold 80s neons, and faded film hues. Copy nostalgic color schemes for design.",
    heroTitle: "Vintage & retro color palettes",
    heroSubtitle:
      "From muted 70s warmth to bold 80s neon, retro palettes add nostalgia and personality. These schemes channel the best of past decades.",
    accent: "linear-gradient(135deg, #b45309 0%, #e9967a 50%, #f4a460 100%)",
    intro: [
      "Retro and vintage palettes borrow from the print, film, and design trends of past decades — the earthy warmth of the 1970s, the saturated neons of the 1980s, and the faded tones of old photographs.",
      "These palettes are great for brands that want personality and nostalgia. Each one captures a specific era's mood. Copy any HEX value or the full palette to add a vintage feel to your design.",
    ],
    palettes: [
      {
        name: "70s Harvest",
        colors: ["#7c2d12", "#c2410c", "#d97706", "#a3a847", "#f5e6c8"],
        useCase: "Warm, earthy, nostalgic branding",
      },
      {
        name: "80s Neon",
        colors: ["#db2777", "#7c3aed", "#06b6d4", "#fbbf24", "#1f2937"],
        useCase: "Bold, energetic, synthwave-inspired design",
      },
      {
        name: "Faded Film",
        colors: ["#5c5470", "#a78a7f", "#d4a373", "#e9ddc8", "#f5efe6"],
        useCase: "Soft, analog, photographic moods",
      },
      {
        name: "Mid-Century Modern",
        colors: ["#1d4e4a", "#d98c5f", "#e6b566", "#c4b9a6", "#f3ede1"],
        useCase: "Retro interior and lifestyle brands",
      },
    ],
    bestUseCases: [
      "Brands that want personality, nostalgia, and a handcrafted feel.",
      "Music, entertainment, and event branding referencing a specific era.",
      "Packaging and editorial design seeking a distinctive, non-generic look.",
    ],
    designTips: [
      "Lower the saturation slightly to make modern colors feel genuinely vintage.",
      "Pair warm faded tones with a cream (not pure white) background for an authentic analog look.",
      "For 80s neon, anchor the bright hues with a dark base so they read as bold, not chaotic.",
    ],
    faqs: [
      {
        question: "What makes a color palette look retro?",
        answer:
          "Retro palettes often use slightly muted, warm tones (for 70s looks) or saturated, contrasting neons (for 80s looks), usually on cream or dark backgrounds rather than pure white.",
      },
      {
        question: "How do I make modern colors look vintage?",
        answer:
          "Reduce saturation and brightness, lean toward warm undertones, and avoid pure white and pure black. A subtle cream background instantly adds an aged, analog feel.",
      },
    ],
    relatedColors: ["autumn-color-palettes", "earth-tone-palettes", "vibrant-bold-palettes"],
    relatedTools: ["palette-generator", "image-color-picker", "color-compare"],
  },
  {
    title: "Minimalist Palettes",
    slug: "minimalist-palettes",
    section: "Style & Mood",
    description:
      "Restrained minimalist color palettes built on neutrals and a single accent.",
    seoTitle: "Minimalist Color Palettes — Clean, Simple Hex Code Schemes",
    seoDescription:
      "Browse minimalist color palettes with HEX codes — mostly neutral with one restrained accent. Copy clean, modern color schemes for minimal web and brand design.",
    heroTitle: "Minimalist color palettes",
    heroSubtitle:
      "Minimalist palettes rely on restraint: a neutral foundation and a single, deliberate accent. Less color, more clarity.",
    accent: "linear-gradient(135deg, #18181b 0%, #e4e4e7 100%)",
    intro: [
      "Minimalist design uses color sparingly. The foundation is almost entirely neutral — white, off-white, and gray — with one carefully chosen accent that carries all the personality and guides the eye.",
      "These palettes show how a single accent against a clean neutral base can feel modern, premium, and confident. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Mono + Blue Accent",
        colors: ["#ffffff", "#f4f4f5", "#18181b", "#71717a", "#2563eb"],
        useCase: "Clean SaaS and portfolio sites",
      },
      {
        name: "Off-White + Ink",
        colors: ["#fafaf9", "#e7e5e4", "#1c1917", "#78716c", "#0f172a"],
        useCase: "Editorial and typography-led design",
      },
      {
        name: "Soft Gray + Coral",
        colors: ["#fafafa", "#e5e5e5", "#262626", "#737373", "#f97362"],
        useCase: "Modern lifestyle and product brands",
      },
      {
        name: "Paper + Green Accent",
        colors: ["#f7f7f5", "#eaeae5", "#1a1a1a", "#6b6b66", "#16a34a"],
        useCase: "Calm, focused, content-first sites",
      },
    ],
    bestUseCases: [
      "Portfolios, agencies, and SaaS sites that want a clean, modern feel.",
      "Editorial and typography-led layouts where content leads.",
      "Premium brands that signal confidence through restraint.",
    ],
    designTips: [
      "Limit yourself to one accent color — the discipline is what makes minimalism work.",
      "Use generous whitespace; in minimal design, space does as much work as color.",
      "Make the single accent count by reserving it only for the most important actions.",
    ],
    faqs: [
      {
        question: "How many colors should a minimalist palette have?",
        answer:
          "Typically two or three neutrals plus a single accent. The whole point is restraint, so resist adding a second accent unless it earns its place.",
      },
      {
        question: "What makes a design feel minimalist?",
        answer:
          "Plenty of whitespace, a mostly neutral palette, strong typography, and one deliberate accent color. Minimalism is about removing everything that isn't essential.",
      },
    ],
    relatedColors: ["neutral-palettes", "monochromatic-palettes", "website-color-schemes"],
    relatedTools: ["palette-generator", "contrast-checker", "color-compare"],
  },
  {
    title: "Vibrant & Bold Palettes",
    slug: "vibrant-bold-palettes",
    section: "Style & Mood",
    description:
      "High-energy vibrant color palettes with saturated, attention-grabbing combinations.",
    seoTitle: "Vibrant & Bold Color Palettes — Bright Hex Code Schemes",
    seoDescription:
      "Explore vibrant, bold color palettes with HEX codes — saturated, high-energy combinations. Copy bright color schemes for playful, attention-grabbing design.",
    heroTitle: "Vibrant & bold color palettes",
    heroSubtitle:
      "When you want to grab attention and project energy, vibrant palettes deliver. These saturated combinations are loud, confident, and fun.",
    accent: "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%)",
    intro: [
      "Vibrant palettes use highly saturated colors at full strength. They feel youthful, energetic, and playful — perfect for brands that want to stand out in a crowded, attention-scarce feed.",
      "The trick is balance: pairing multiple bold colors so they energize rather than clash. These palettes are tuned for impact while staying usable. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Pop Electric",
        colors: ["#7c3aed", "#ec4899", "#f59e0b", "#06b6d4", "#111827"],
        useCase: "Youth, music, and entertainment brands",
      },
      {
        name: "Tropical Punch",
        colors: ["#16a34a", "#facc15", "#f97316", "#e11d48", "#fff7ed"],
        useCase: "Food, festivals, and summer campaigns",
      },
      {
        name: "Candy Bright",
        colors: ["#2563eb", "#db2777", "#22d3ee", "#fbbf24", "#fdf2f8"],
        useCase: "Playful apps and consumer products",
      },
      {
        name: "Neon Contrast",
        colors: ["#22c55e", "#a855f7", "#f43f5e", "#0ea5e9", "#0f172a"],
        useCase: "Bold tech, gaming, and creative brands",
      },
    ],
    bestUseCases: [
      "Youth-focused brands that need to stand out and feel energetic.",
      "Festivals, events, and campaigns with a fun, celebratory tone.",
      "Playful apps and consumer products that embrace personality.",
    ],
    designTips: [
      "Anchor bright colors with a dark or white neutral so the eye has somewhere to rest.",
      "Limit the palette to three or four vivid hues — more than that becomes overwhelming.",
      "Bold colors often fail text contrast; reserve them for fills and check pairs carefully.",
    ],
    faqs: [
      {
        question: "How do I use bold colors without clashing?",
        answer:
          "Balance is key. Choose vivid colors that sit at meaningful angles on the color wheel, anchor them with a neutral, and limit the count to three or four so the palette stays cohesive.",
      },
      {
        question: "Are vibrant colors bad for accessibility?",
        answer:
          "Not inherently, but saturated colors often fail text-contrast requirements. Use them for large elements and fills, and always test text pairings in the Contrast Checker.",
      },
    ],
    relatedColors: ["gradient-color-palettes", "red-palettes", "summer-color-palettes"],
    relatedTools: ["palette-generator", "contrast-checker", "color-compare"],
  },
  {
    title: "Gradient Color Palettes",
    slug: "gradient-color-palettes",
    section: "Style & Mood",
    description:
      "Smooth gradient color pairings ready to drop into CSS backgrounds and buttons.",
    seoTitle: "Gradient Color Palettes — Hex Pairs for CSS Gradients",
    seoDescription:
      "Browse gradient color palettes with HEX codes — smooth, modern color pairs for CSS backgrounds, buttons, and heroes. Copy gradient color combinations free.",
    heroTitle: "Gradient color palettes",
    heroSubtitle:
      "Gradients add depth and modern energy. These color pairs are chosen to blend smoothly — drop them straight into a CSS gradient.",
    accent: "linear-gradient(135deg, #6d5dfc 0%, #ff4fa3 50%, #ffb86c 100%)",
    intro: [
      "A great gradient depends on choosing colors that transition smoothly without muddy gray in the middle. Colors that sit near each other on the wheel, or share a temperature, blend most cleanly.",
      "Each palette below lists colors in gradient order — feed them straight into the Gradient Generator to get production-ready CSS. Copy any HEX value or the full set.",
    ],
    palettes: [
      {
        name: "Violet Sunset",
        colors: ["#6d5dfc", "#a855f7", "#ec4899", "#ff4fa3", "#ffb86c"],
        useCase: "Modern hero backgrounds and landing pages",
      },
      {
        name: "Ocean Fade",
        colors: ["#0ea5e9", "#06b6d4", "#14b8a6", "#22d3ee", "#a5f3fc"],
        useCase: "Fresh, calming app and web backgrounds",
      },
      {
        name: "Warm Glow",
        colors: ["#f97316", "#fb923c", "#fbbf24", "#facc15", "#fde68a"],
        useCase: "Energetic buttons and warm overlays",
      },
      {
        name: "Aurora",
        colors: ["#22c55e", "#06b6d4", "#6366f1", "#a855f7", "#ec4899"],
        useCase: "Vibrant, eye-catching gradient sections",
      },
    ],
    bestUseCases: [
      "Hero sections and landing pages that need depth and energy.",
      "Buttons and cards where a subtle gradient adds a tactile feel.",
      "Overlays that keep text readable over imagery.",
    ],
    designTips: [
      "Pick colors close in hue or temperature so the blend stays clean and avoids gray midpoints.",
      "Keep gradients subtle in UI — strong gradients work best in heroes, not body text areas.",
      "Use two or three stops for smoothness; add more only for bold, decorative backgrounds.",
    ],
    faqs: [
      {
        question: "What colors make a good gradient?",
        answer:
          "Colors that sit near each other on the wheel or share a temperature blend most smoothly. Colors directly opposite each other can create a muddy gray band in the middle.",
      },
      {
        question: "How do I turn these into CSS?",
        answer:
          "Feed the colors into the Gradient Generator, choose a direction, and copy the production-ready linear-gradient() value straight into your stylesheet.",
      },
    ],
    relatedColors: ["vibrant-bold-palettes", "blue-palettes", "purple-palettes"],
    relatedTools: ["gradient-generator", "palette-generator", "css-color-preview"],
  },

  // ─── Seasons & Occasions ──────────────────────────────────────────
  {
    title: "Autumn Color Palettes",
    slug: "autumn-color-palettes",
    section: "Seasons & Occasions",
    description:
      "Warm, cozy autumn color palettes inspired by falling leaves and harvest tones.",
    seoTitle: "Autumn Color Palettes — Warm Fall Hex Code Schemes",
    seoDescription:
      "Explore autumn color palettes with HEX codes — burnt orange, deep red, golden yellow, and forest green. Copy cozy fall color schemes for seasonal design.",
    heroTitle: "Autumn color palettes",
    heroSubtitle:
      "Autumn means warmth, harvest, and falling leaves. These palettes capture the cozy reds, oranges, and golds of the season.",
    accent: "linear-gradient(135deg, #7c2d12 0%, #d97706 50%, #ca8a04 100%)",
    intro: [
      "Autumn palettes draw from nature's most dramatic color show — burnt oranges, deep reds, golden yellows, and forest greens, all warmed by earthy browns. They feel cozy, rich, and nostalgic.",
      "These palettes are ideal for seasonal campaigns, food and beverage branding, and any design that wants to feel warm and grounded. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Falling Leaves",
        colors: ["#7c2d12", "#c2410c", "#d97706", "#ca8a04", "#f5e6c8"],
        useCase: "Seasonal campaigns and fall marketing",
      },
      {
        name: "Harvest Gold",
        colors: ["#713f12", "#a16207", "#ca8a04", "#d6a77a", "#faf6ee"],
        useCase: "Food, bakery, and beverage brands",
      },
      {
        name: "Deep Maple",
        colors: ["#450a0a", "#7f1d1d", "#b45309", "#d97706", "#fde68a"],
        useCase: "Rich, warm, dramatic autumn moods",
      },
      {
        name: "Forest & Rust",
        colors: ["#1a2e1a", "#3f6212", "#9a3412", "#c2734a", "#f3ede1"],
        useCase: "Outdoor, rustic, and cozy lifestyle brands",
      },
    ],
    bestUseCases: [
      "Seasonal fall campaigns, sales, and social content.",
      "Food, bakery, coffee, and beverage brands evoking warmth.",
      "Outdoor and lifestyle brands with a cozy, rustic feel.",
    ],
    designTips: [
      "Keep autumn colors warm and slightly muted — pure, bright hues break the seasonal feel.",
      "Use a cream or warm off-white background rather than stark white to enhance the coziness.",
      "Layer reds, oranges, and golds together; they share warmth and rarely clash.",
    ],
    faqs: [
      {
        question: "What colors represent autumn?",
        answer:
          "Autumn is defined by warm, earthy colors — burnt orange, deep red, golden yellow, mustard, brown, and forest green — echoing the colors of changing leaves and harvest.",
      },
      {
        question: "What colors go well with autumn tones?",
        answer:
          "Autumn tones pair well with cream and warm neutrals, deep forest greens, and rich browns. A small touch of gold or brass adds warmth and a premium feel.",
      },
    ],
    relatedColors: ["earth-tone-palettes", "orange-palettes", "halloween-color-palettes"],
    relatedTools: ["palette-generator", "color-compare", "image-color-picker"],
  },
  {
    title: "Summer Color Palettes",
    slug: "summer-color-palettes",
    section: "Seasons & Occasions",
    description:
      "Bright, breezy summer color palettes inspired by sun, sea, and tropical fun.",
    seoTitle: "Summer Color Palettes — Bright, Breezy Hex Code Schemes",
    seoDescription:
      "Browse summer color palettes with HEX codes — sunny yellows, ocean blues, and tropical brights. Copy fresh summer color schemes for seasonal campaigns.",
    heroTitle: "Summer color palettes",
    heroSubtitle:
      "Summer is sunshine, ocean, and tropical fruit. These bright, breezy palettes bring warm-weather energy to any design.",
    accent: "linear-gradient(135deg, #0891b2 0%, #facc15 50%, #f97316 100%)",
    intro: [
      "Summer palettes are bright, fresh, and full of energy — sunny yellows, ocean and sky blues, tropical greens, and juicy coral. They feel light, optimistic, and full of movement.",
      "These palettes work beautifully for seasonal campaigns, travel and lifestyle brands, and any design that wants a warm-weather lift. Copy any HEX value or the full palette.",
    ],
    palettes: [
      {
        name: "Beach Day",
        colors: ["#0891b2", "#22d3ee", "#fde047", "#fb923c", "#fef9c3"],
        useCase: "Travel, swimwear, and coastal brands",
      },
      {
        name: "Tropical Fruit",
        colors: ["#16a34a", "#facc15", "#f97316", "#e11d48", "#fff7ed"],
        useCase: "Food, drinks, and festival campaigns",
      },
      {
        name: "Ocean Breeze",
        colors: ["#0ea5e9", "#38bdf8", "#5eead4", "#a7f3d0", "#f0fdfa"],
        useCase: "Wellness, spa, and relaxed lifestyle brands",
      },
      {
        name: "Sunset Coral",
        colors: ["#f43f5e", "#fb7185", "#fb923c", "#fbbf24", "#fff1f2"],
        useCase: "Warm, playful summer marketing",
      },
    ],
    bestUseCases: [
      "Seasonal summer campaigns, sales, and social content.",
      "Travel, beach, and coastal lifestyle brands.",
      "Food and beverage brands evoking freshness and fun.",
    ],
    designTips: [
      "Pair a cool ocean blue with a warm sunny accent for that classic summer contrast.",
      "Keep brights balanced with plenty of white space so the palette feels airy, not loud.",
      "Coral and tropical tones can be hard to read as text — use them for fills and highlights.",
    ],
    faqs: [
      {
        question: "What colors represent summer?",
        answer:
          "Summer is associated with bright, warm, and fresh colors — sunny yellow, ocean and sky blue, coral, tropical green, and turquoise. The mood is light, energetic, and optimistic.",
      },
      {
        question: "What colors go well together for a summer look?",
        answer:
          "Cool blues and turquoises paired with warm yellows, corals, and oranges create the classic summer contrast. Keep them bright and balance them with plenty of white.",
      },
    ],
    relatedColors: ["teal-palettes", "vibrant-bold-palettes", "nature-color-palettes"],
    relatedTools: ["palette-generator", "color-compare", "gradient-generator"],
  },
  {
    title: "Christmas Color Palettes",
    slug: "christmas-color-palettes",
    section: "Seasons & Occasions",
    description:
      "Festive Christmas color palettes from classic red and green to modern winter tones.",
    seoTitle: "Christmas Color Palettes — Festive Holiday Hex Code Schemes",
    seoDescription:
      "Explore Christmas color palettes with HEX codes — classic red and green, gold and cream, and icy winter blues. Copy festive holiday color schemes for design.",
    heroTitle: "Christmas color palettes",
    heroSubtitle:
      "From traditional red-and-green to elegant gold and icy winter blues, these palettes bring festive warmth to holiday designs.",
    accent: "linear-gradient(135deg, #991b1b 0%, #166534 100%)",
    intro: [
      "Christmas color palettes range from the classic — deep red, evergreen, and gold — to more modern takes built on icy blues, warm creams, and metallic accents. The right palette sets the holiday mood instantly.",
      "These palettes suit seasonal campaigns, packaging, greeting cards, and festive web design. Copy any HEX value or the full palette to get into the holiday spirit.",
    ],
    palettes: [
      {
        name: "Classic Christmas",
        colors: ["#991b1b", "#dc2626", "#166534", "#16a34a", "#fef2f2"],
        useCase: "Traditional, festive holiday branding",
      },
      {
        name: "Gold & Evergreen",
        colors: ["#14532d", "#166534", "#ca8a04", "#e8c873", "#faf6ee"],
        useCase: "Elegant, premium holiday design",
      },
      {
        name: "Frosted Winter",
        colors: ["#0c4a6e", "#0284c7", "#7dd3fc", "#e0f2fe", "#ffffff"],
        useCase: "Icy, modern winter campaigns",
      },
      {
        name: "Cozy Cranberry",
        colors: ["#7f1d1d", "#b91c1c", "#a3a847", "#d6c7a1", "#fdf6ec"],
        useCase: "Warm, rustic, homey holiday moods",
      },
    ],
    bestUseCases: [
      "Holiday campaigns, sales, and seasonal social content.",
      "Greeting cards, packaging, and gift branding.",
      "Festive landing pages and email design.",
    ],
    designTips: [
      "Balance red and green carefully — equal amounts can clash, so let one lead and the other accent.",
      "Add gold or cream to soften the classic combination and make it feel more premium.",
      "For a modern look, swap red-and-green for icy blues, white, and a single metallic accent.",
    ],
    faqs: [
      {
        question: "What are the traditional Christmas colors?",
        answer:
          "The classic Christmas palette is deep red and evergreen green, often accented with gold, white, and cream. These come from holly, evergreens, and festive decoration.",
      },
      {
        question: "How do I make Christmas colors look modern?",
        answer:
          "Move away from equal red-and-green. Try evergreen with gold and cream, or icy winter blues with white and a single metallic accent for an elegant, contemporary feel.",
      },
    ],
    relatedColors: ["red-palettes", "green-palettes", "black-and-gold"],
    relatedTools: ["palette-generator", "color-compare", "contrast-checker"],
  },
  {
    title: "Halloween Color Palettes",
    slug: "halloween-color-palettes",
    section: "Seasons & Occasions",
    description:
      "Spooky Halloween color palettes from classic orange and black to eerie purples.",
    seoTitle: "Halloween Color Palettes — Spooky Hex Code Schemes",
    seoDescription:
      "Browse Halloween color palettes with HEX codes — pumpkin orange, midnight black, eerie purple, and toxic green. Copy spooky color schemes for seasonal design.",
    heroTitle: "Halloween color palettes",
    heroSubtitle:
      "Pumpkin orange, midnight black, eerie purple, and toxic green — these palettes capture every shade of spooky.",
    accent: "linear-gradient(135deg, #1a1a1a 0%, #ea580c 100%)",
    intro: [
      "Halloween palettes are built for atmosphere. Classic pumpkin orange and black anchor the season, while deep purples, blood reds, and toxic greens add an eerie, playful edge.",
      "These palettes are perfect for seasonal campaigns, party invitations, games, and festive web design. Copy any HEX value or the full palette to set the spooky mood.",
    ],
    palettes: [
      {
        name: "Classic Pumpkin",
        colors: ["#0a0a0a", "#1a1a1a", "#ea580c", "#f97316", "#fdba74"],
        useCase: "Traditional Halloween branding",
      },
      {
        name: "Eerie Purple",
        colors: ["#1e1b2e", "#4c1d95", "#7c3aed", "#a855f7", "#1a1a1a"],
        useCase: "Mysterious, magical, spooky moods",
      },
      {
        name: "Toxic Night",
        colors: ["#0a0a0a", "#1a2e1a", "#65a30d", "#84cc16", "#bef264"],
        useCase: "Creepy, slime, and monster themes",
      },
      {
        name: "Blood Moon",
        colors: ["#0a0a0a", "#450a0a", "#991b1b", "#dc2626", "#f97316"],
        useCase: "Horror, dramatic, and intense themes",
      },
    ],
    bestUseCases: [
      "Halloween campaigns, sales, and seasonal social content.",
      "Party invitations, posters, and event branding.",
      "Games, apps, and entertainment with a spooky theme.",
    ],
    designTips: [
      "Use black generously as the base — it makes orange, purple, and green glow against it.",
      "Add a single bright, glowing accent (toxic green or vivid orange) for an eerie spotlight effect.",
      "Bright accents on near-black usually pass contrast well, but verify any small text.",
    ],
    faqs: [
      {
        question: "What are the main Halloween colors?",
        answer:
          "The classic Halloween palette is orange and black, often joined by purple, green, and red. Orange comes from pumpkins and autumn, while black represents night and mystery.",
      },
      {
        question: "What colors make a design look spooky?",
        answer:
          "Deep blacks and dark purples set an eerie base, while glowing accents like toxic green, vivid orange, or blood red create contrast and atmosphere against the darkness.",
      },
    ],
    relatedColors: ["autumn-color-palettes", "orange-palettes", "dark-mode-palettes"],
    relatedTools: ["palette-generator", "contrast-checker", "color-compare"],
  },
  {
    title: "Nature Color Palettes",
    slug: "nature-color-palettes",
    section: "Seasons & Occasions",
    description:
      "Organic nature color palettes drawn from forests, oceans, deserts, and skies.",
    seoTitle: "Nature Color Palettes — Organic Hex Code Schemes",
    seoDescription:
      "Explore nature color palettes with HEX codes — forest greens, ocean blues, desert sands, and sky tones. Copy organic, earthy color schemes for natural design.",
    heroTitle: "Nature color palettes",
    heroSubtitle:
      "Nature is the best color designer there is. These palettes borrow harmonious combinations straight from forests, oceans, deserts, and skies.",
    accent: "linear-gradient(135deg, #166534 0%, #0891b2 50%, #ca8a04 100%)",
    intro: [
      "The most reliable color harmonies already exist in nature. A forest, a coastline, or a desert at dusk offers combinations that feel inherently balanced because we see them every day.",
      "These palettes capture those natural scenes — greens and browns of the forest, blues of the ocean, warm sands of the desert. Copy any HEX value, or pull your own from a photo with the Image Color Picker.",
    ],
    palettes: [
      {
        name: "Deep Forest",
        colors: ["#1a2e1a", "#14532d", "#3f6212", "#84a98c", "#f0f4ec"],
        useCase: "Outdoor, eco, and woodland brands",
      },
      {
        name: "Ocean Depths",
        colors: ["#0c4a6e", "#0e7490", "#0891b2", "#67e8f9", "#ecfeff"],
        useCase: "Marine, travel, and coastal brands",
      },
      {
        name: "Desert Dusk",
        colors: ["#7c2d12", "#c2734a", "#e6b566", "#dcd0b4", "#faf6ee"],
        useCase: "Travel, ceramics, and warm lifestyle brands",
      },
      {
        name: "Mountain Sky",
        colors: ["#334155", "#64748b", "#94a3b8", "#bae6fd", "#f8fafc"],
        useCase: "Calm, expansive, outdoor moods",
      },
    ],
    bestUseCases: [
      "Eco, outdoor, and sustainability brands seeking authenticity.",
      "Travel and tourism brands evoking specific landscapes.",
      "Wellness and lifestyle brands that want a calm, organic feel.",
    ],
    designTips: [
      "Borrow combinations directly from nature photos — they're harmonious by default.",
      "Keep saturation moderate so the palette feels natural rather than synthetic.",
      "Use the Image Color Picker to extract an exact palette from a landscape you love.",
    ],
    faqs: [
      {
        question: "Why do natural color combinations look good?",
        answer:
          "Nature's colors evolved together under the same light, so they share undertones and feel balanced. Borrowing a palette from a real scene gives you harmony with no guesswork.",
      },
      {
        question: "How do I get colors from a nature photo?",
        answer:
          "Upload the photo to the Image Color Picker. It extracts the dominant colors as a copyable palette, entirely in your browser, so you can build a scheme straight from the scene.",
      },
    ],
    relatedColors: ["green-palettes", "earth-tone-palettes", "summer-color-palettes"],
    relatedTools: ["image-color-picker", "palette-generator", "color-compare"],
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
