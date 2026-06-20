export type ToolCategory =
  | "Core"
  | "Accessibility"
  | "Generator"
  | "Converter"
  | "Extractor"
  | "CSS";

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolStep {
  title: string;
  text: string;
}

export interface Tool {
  title: string;
  slug: string;
  /** Short blurb for cards and grids. */
  description: string;
  category: ToolCategory;
  /** Emoji used as a lightweight, zero-payload icon. */
  icon: string;
  /** Accent color (one of the brand tokens) for the card. */
  accent: string;
  /** Whether an interactive island exists for this tool. */
  interactive: boolean;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Intro paragraphs rendered above supporting content. */
  intro: string[];
  howTo: ToolStep[];
  examples: { label: string; text: string }[];
  whyItMatters: string[];
  faqs: ToolFaq[];
  relatedTools: string[];
}

export const tools: Tool[] = [
  {
    title: "Color Compare",
    slug: "color-compare",
    description:
      "Compare two or more colors side by side with HEX, RGB, HSL, and contrast details.",
    category: "Core",
    icon: "🎨",
    accent: "var(--cc-primary)",
    interactive: true,
    seoTitle: "Color Compare — Compare Colors Side by Side (HEX, RGB, HSL)",
    seoDescription:
      "Compare 2–5 colors side by side. See HEX, RGB, HSL values and WCAG contrast between any pair, then copy the values you need.",
    heroTitle: "Compare colors side by side",
    heroSubtitle:
      "Drop in two to five colors and instantly see HEX, RGB, and HSL values plus the contrast ratio between any pair.",
    intro: [
      "ColorCompare lets you place several colors next to each other so you can judge them the way they will actually appear in your design — together, not in isolation. A color almost never lives alone; it sits beside a background, a label, a button, or another swatch, and its perceived hue and brightness shift depending on its neighbors.",
      "Each swatch shows its HEX, RGB, and HSL representation, and the tool calculates the WCAG contrast ratio between any pair you choose. That makes it easy to spot which combinations are comfortable to read and which ones clash or wash out.",
    ],
    howTo: [
      {
        title: "Add your colors",
        text: "Type or paste a HEX code into each input. Add up to five colors to compare a full mini-palette at once.",
      },
      {
        title: "Read the values",
        text: "Every swatch lists HEX, RGB, and HSL. Use the copy button to grab any value in one click.",
      },
      {
        title: "Check the contrast",
        text: "Pick any two swatches to see the contrast ratio between them and whether it passes WCAG AA for text.",
      },
    ],
    examples: [
      {
        label: "Brand audit",
        text: "Paste your primary, secondary, and accent colors to confirm they feel balanced as a set.",
      },
      {
        label: "Button vs background",
        text: "Compare a button color against the page background to make sure it stands out clearly.",
      },
      {
        label: "Light vs dark",
        text: "Line up light and dark variants of the same hue to choose the right step for a UI state.",
      },
    ],
    whyItMatters: [
      "Comparing colors together — rather than picking them one at a time — prevents the common problem of a palette that looks fine swatch-by-swatch but muddy as a whole.",
      "Seeing HEX, RGB, and HSL side by side helps you reason about relationships: HSL in particular makes it obvious when two colors share a hue but differ in lightness.",
      "The built-in contrast number turns a subjective ‘does this look readable?’ into a measurable check you can defend in a design review.",
    ],
    faqs: [
      {
        question: "How many colors can I compare at once?",
        answer:
          "You can compare between two and five colors at a time, which covers most palettes, UI states, and brand sets.",
      },
      {
        question: "Which color formats are supported?",
        answer:
          "Enter colors as HEX codes. Each swatch is then shown in HEX, RGB, and HSL so you can copy whichever format your workflow needs.",
      },
      {
        question: "What contrast standard do you use?",
        answer:
          "Contrast ratios follow the WCAG 2.1 formula, the same standard used for web accessibility. A ratio of 4.5:1 or higher passes AA for normal text.",
      },
    ],
    relatedTools: ["contrast-checker", "palette-generator", "hex-to-rgb"],
  },
  {
    title: "Contrast Checker",
    slug: "contrast-checker",
    description:
      "Check WCAG contrast ratios for text, backgrounds, buttons, and UI components.",
    category: "Accessibility",
    icon: "🔍",
    accent: "var(--cc-green)",
    interactive: true,
    seoTitle: "WCAG Contrast Checker — Test Text & Background Color Contrast",
    seoDescription:
      "Check the WCAG contrast ratio between a foreground and background color. Get instant AA and AAA pass/fail results for normal and large text.",
    heroTitle: "Check color contrast for accessibility",
    heroSubtitle:
      "Enter a text color and a background color to see the exact contrast ratio and whether it passes WCAG AA and AAA.",
    intro: [
      "Contrast is one of the most important — and most overlooked — parts of accessible design. If text doesn’t have enough contrast against its background, people with low vision, color vision deficiencies, or simply a sunlit screen will struggle to read it.",
      "This checker computes the WCAG 2.1 contrast ratio between any two colors and tells you, at a glance, whether the pair passes the AA and AAA thresholds for both normal and large text. A live preview shows the actual text rendered on the background so you can trust the number.",
    ],
    howTo: [
      {
        title: "Set the text color",
        text: "Enter the foreground color you plan to use for text or icons.",
      },
      {
        title: "Set the background",
        text: "Enter the surface color the text will sit on — a page background, card, or button fill.",
      },
      {
        title: "Read the result",
        text: "The ratio updates instantly with clear Pass / Fail labels for AA and AAA at both text sizes.",
      },
    ],
    examples: [
      {
        label: "Body text",
        text: "Aim for at least 4.5:1 so paragraphs are comfortable for everyone to read.",
      },
      {
        label: "Large headings",
        text: "Text 24px (or 18.66px bold) and larger only needs 3:1 to pass AA.",
      },
      {
        label: "Buttons & icons",
        text: "Interactive elements and meaningful icons should reach 3:1 against adjacent colors.",
      },
    ],
    whyItMatters: [
      "WCAG AA contrast is a legal accessibility requirement in many regions and a baseline expectation for professional products.",
      "Good contrast helps everyone, not only users with disabilities — it improves readability on cheap screens, in bright light, and for tired eyes.",
      "Catching contrast problems early is far cheaper than retrofitting an entire design system after launch.",
    ],
    faqs: [
      {
        question: "What contrast ratio do I need to pass WCAG AA?",
        answer:
          "Normal text needs a ratio of at least 4.5:1. Large text (24px, or 18.66px bold) needs at least 3:1. AAA raises these to 7:1 and 4.5:1.",
      },
      {
        question: "What counts as ‘large text’?",
        answer:
          "WCAG defines large text as 24px (about 18pt) regular weight, or 18.66px (about 14pt) bold and above.",
      },
      {
        question: "Does contrast apply to icons and graphics?",
        answer:
          "Yes. Meaningful non-text elements such as icons, form borders, and UI components should meet a 3:1 contrast ratio against adjacent colors.",
      },
    ],
    relatedTools: ["color-compare", "color-blindness-simulator", "palette-generator"],
  },
  {
    title: "Palette Generator",
    slug: "palette-generator",
    description:
      "Generate balanced color palettes for websites, brands, presentations, and visuals.",
    category: "Generator",
    icon: "🌈",
    accent: "var(--cc-pink)",
    interactive: true,
    seoTitle: "Color Palette Generator — Create Harmonious Color Schemes",
    seoDescription:
      "Generate harmonious color palettes from any base color. Choose complementary, analogous, triadic, tetradic, or monochromatic schemes and copy the HEX values.",
    heroTitle: "Generate harmonious color palettes",
    heroSubtitle:
      "Pick a base color and a harmony rule to instantly build a balanced palette you can copy into any project.",
    intro: [
      "A good palette is built on relationships, not luck. Color harmony rules — drawn from the color wheel — give you a reliable starting point by choosing colors that sit at meaningful angles from your base hue.",
      "This generator turns any base color into a complete scheme using complementary, analogous, triadic, tetradic, or monochromatic rules. Each result is fully copyable, so you can move from idea to implementation in seconds.",
    ],
    howTo: [
      {
        title: "Choose a base color",
        text: "Enter the HEX code of the color your brand or design centers on.",
      },
      {
        title: "Select a harmony rule",
        text: "Switch between complementary, analogous, triadic, tetradic, and monochromatic to explore different moods.",
      },
      {
        title: "Copy your palette",
        text: "Copy individual swatches or the whole palette and paste it straight into your design tool.",
      },
    ],
    examples: [
      {
        label: "Analogous = calm",
        text: "Neighboring hues create gentle, cohesive palettes ideal for content-heavy sites.",
      },
      {
        label: "Complementary = punch",
        text: "Opposite hues give strong contrast — great for calls to action and highlights.",
      },
      {
        label: "Monochromatic = clean",
        text: "A single hue in many tints and shades produces a minimal, modern look.",
      },
    ],
    whyItMatters: [
      "Harmony rules remove guesswork, helping non-designers produce palettes that feel intentional.",
      "Starting from your real brand color keeps generated schemes on-brand instead of generic.",
      "Exploring several rules from the same base is the fastest way to find a direction before committing.",
    ],
    faqs: [
      {
        question: "Which harmony rule should I use?",
        answer:
          "Analogous schemes feel calm and unified; complementary schemes maximize contrast; triadic and tetradic add variety; monochromatic keeps things minimal. Try a few from the same base color and compare.",
      },
      {
        question: "Can I use these palettes commercially?",
        answer:
          "Yes. Colors and HEX values aren’t copyrightable, so any palette you generate here is free to use in personal or commercial work.",
      },
      {
        question: "How do I keep a palette accessible?",
        answer:
          "Generate your palette here, then test text-and-background pairs in the Contrast Checker to make sure they meet WCAG contrast guidelines.",
      },
    ],
    relatedTools: ["shades-and-tints-generator", "color-compare", "gradient-generator"],
  },
  {
    title: "HEX to RGB Converter",
    slug: "hex-to-rgb",
    description:
      "Convert HEX color codes into RGB, HSL, and CSS-ready values instantly.",
    category: "Converter",
    icon: "🔁",
    accent: "var(--cc-cyan)",
    interactive: true,
    seoTitle: "HEX to RGB Converter — Convert HEX to RGB, HSL & CSS",
    seoDescription:
      "Convert any HEX color code to RGB, HSL, and ready-to-paste CSS values. Instant, accurate, and free — with one-click copy buttons.",
    heroTitle: "Convert HEX to RGB, HSL & CSS",
    heroSubtitle:
      "Paste a HEX code and instantly get its RGB, HSL, and CSS-ready equivalents, each with a one-click copy button.",
    intro: [
      "HEX is the most common way to write colors on the web, but it isn’t always the format you need. CSS gradients, rgba() transparency, and design tokens often call for RGB or HSL — and converting by hand is tedious and error-prone.",
      "This converter does the math for you. Enter a HEX value and get clean RGB, HSL, and full CSS syntax you can paste straight into a stylesheet.",
    ],
    howTo: [
      {
        title: "Enter a HEX code",
        text: "Type a 3- or 6-digit HEX value, with or without the leading #.",
      },
      {
        title: "Read every format",
        text: "The tool outputs RGB, HSL, and ready-to-use CSS syntax at once.",
      },
      {
        title: "Copy what you need",
        text: "Use the copy button next to any value to grab it instantly.",
      },
    ],
    examples: [
      {
        label: "Add transparency",
        text: "Convert to RGB so you can build an rgba() value with the alpha you want.",
      },
      {
        label: "Tweak lightness",
        text: "Convert to HSL when you want to lighten or darken a color predictably.",
      },
      {
        label: "Design tokens",
        text: "Store colors as RGB channels for flexible, themeable token systems.",
      },
    ],
    whyItMatters: [
      "RGB makes transparency straightforward through the alpha channel in rgba().",
      "HSL makes intentional adjustments easy — change one number to shift hue, saturation, or lightness.",
      "Having all formats at once removes the friction of switching between tools mid-task.",
    ],
    faqs: [
      {
        question: "What is the difference between HEX and RGB?",
        answer:
          "They describe the same color in different notations. HEX uses base-16 digits (#ff6600), while RGB lists the red, green, and blue channels as numbers from 0–255 (rgb(255, 102, 0)).",
      },
      {
        question: "Do 3-digit HEX codes work?",
        answer:
          "Yes. Shorthand codes like #f60 are automatically expanded to their full 6-digit form (#ff6600) before conversion.",
      },
      {
        question: "Is HSL better than RGB?",
        answer:
          "Neither is better — they suit different jobs. RGB maps directly to how screens emit light, while HSL is more intuitive for humans adjusting hue, saturation, and lightness.",
      },
    ],
    relatedTools: ["rgb-to-hex", "cmyk-converter", "css-color-preview"],
  },
  {
    title: "RGB to HEX Converter",
    slug: "rgb-to-hex",
    description:
      "Convert RGB values into HEX, HSL, and CSS-ready color codes instantly.",
    category: "Converter",
    icon: "🔂",
    accent: "var(--cc-cyan)",
    interactive: true,
    seoTitle: "RGB to HEX Converter — Convert RGB to HEX, HSL & CSS",
    seoDescription:
      "Convert RGB color values into HEX, HSL, and CSS-ready syntax instantly. Free, accurate, and copy-ready for designers and developers.",
    heroTitle: "Convert RGB to HEX, HSL & CSS",
    heroSubtitle:
      "Enter red, green, and blue values to instantly get the HEX, HSL, and CSS equivalents.",
    intro: [
      "Design software and color pickers often hand you RGB values, but HEX is what most stylesheets and style guides expect. Converting between them by hand means juggling base-16 math you shouldn’t have to.",
      "Enter your R, G, and B channels and this tool returns the matching HEX code, HSL values, and CSS syntax, all ready to copy.",
    ],
    howTo: [
      {
        title: "Enter RGB values",
        text: "Set the red, green, and blue channels, each from 0 to 255.",
      },
      {
        title: "Get the HEX code",
        text: "The matching HEX value appears instantly, alongside HSL and CSS.",
      },
      {
        title: "Copy and paste",
        text: "Copy the format you need straight into your stylesheet or design file.",
      },
    ],
    examples: [
      {
        label: "From a screenshot",
        text: "Pick RGB from any image editor and convert it to a HEX code for your CSS.",
      },
      {
        label: "Brand guidelines",
        text: "Translate RGB brand values into the HEX codes most teams document.",
      },
      {
        label: "Quick sanity check",
        text: "Verify that an RGB value matches the HEX you expect.",
      },
    ],
    whyItMatters: [
      "HEX is the most widely documented color format in brand guides and design systems.",
      "Converting RGB to HEX keeps your codebase consistent with the rest of the web.",
      "Seeing HSL at the same time helps you understand and adjust the color, not just copy it.",
    ],
    faqs: [
      {
        question: "What range do RGB values use?",
        answer:
          "Each of the red, green, and blue channels runs from 0 to 255, giving roughly 16.7 million possible colors.",
      },
      {
        question: "Will the HEX code be exact?",
        answer:
          "Yes. RGB and HEX both describe 8-bit-per-channel color, so the conversion between them is exact with no rounding loss.",
      },
      {
        question: "Can I convert back from HEX to RGB?",
        answer:
          "Absolutely — use the HEX to RGB Converter for the reverse direction.",
      },
    ],
    relatedTools: ["hex-to-rgb", "cmyk-converter", "css-color-preview"],
  },
  {
    title: "CMYK Converter",
    slug: "cmyk-converter",
    description: "Convert digital colors into CMYK values for print workflows.",
    category: "Converter",
    icon: "🖨️",
    accent: "var(--cc-yellow)",
    interactive: true,
    seoTitle: "CMYK Converter — Convert HEX & RGB to CMYK for Print",
    seoDescription:
      "Convert HEX or RGB screen colors into approximate CMYK values for print. Understand how digital colors translate to ink for accurate proofing.",
    heroTitle: "Convert screen colors to CMYK",
    heroSubtitle:
      "Turn a HEX or RGB color into approximate CMYK values for print projects and proofs.",
    intro: [
      "Screens create color with light (RGB), while printers create it with ink (CMYK — cyan, magenta, yellow, and key/black). Because the two systems work so differently, a vivid on-screen color can look noticeably duller once it’s printed.",
      "This converter gives you a solid CMYK starting point from any HEX or RGB color. Treat the result as a reference for proofing — final output always depends on your printer, paper, and color profile.",
    ],
    howTo: [
      {
        title: "Enter your color",
        text: "Provide a HEX code or RGB values for the screen color you want to print.",
      },
      {
        title: "Read the CMYK",
        text: "The tool returns approximate cyan, magenta, yellow, and key (black) percentages.",
      },
      {
        title: "Proof before printing",
        text: "Use the values as a baseline, then verify with a physical proof for color-critical work.",
      },
    ],
    examples: [
      {
        label: "Business cards",
        text: "Translate brand HEX colors to CMYK before sending files to a print shop.",
      },
      {
        label: "Posters & flyers",
        text: "Check how bold screen colors might shift when printed in ink.",
      },
      {
        label: "Packaging",
        text: "Get a CMYK starting point, then confirm with the printer’s color profile.",
      },
    ],
    whyItMatters: [
      "RGB has a wider gamut than CMYK, so some bright screen colors simply cannot be reproduced exactly in print.",
      "Knowing the CMYK breakdown early helps you choose colors that survive the trip to paper.",
      "Setting expectations about color shift avoids disappointment and costly reprints.",
    ],
    faqs: [
      {
        question: "Why does my printed color look different from the screen?",
        answer:
          "Screens emit light and cover a wider color gamut than ink can reproduce. Bright, saturated colors in particular tend to look more muted in CMYK print.",
      },
      {
        question: "Is this CMYK conversion exact?",
        answer:
          "It’s a standard mathematical approximation. True print color depends on the printer, ink, paper, and ICC color profile, so always check a physical proof for color-critical jobs.",
      },
      {
        question: "Should I design in CMYK or RGB?",
        answer:
          "Design in RGB for screens and in CMYK (or with a CMYK proof) for print. For print projects, confirm final colors with your print provider’s profile.",
      },
    ],
    relatedTools: ["hex-to-rgb", "rgb-to-hex", "color-compare"],
  },
  {
    title: "Gradient Generator",
    slug: "gradient-generator",
    description: "Create smooth CSS gradients and copy production-ready CSS.",
    category: "Generator",
    icon: "🌅",
    accent: "var(--cc-orange)",
    interactive: true,
    seoTitle: "CSS Gradient Generator — Build & Copy Linear Gradients",
    seoDescription:
      "Create smooth CSS gradients with multiple colors and any direction. Preview live and copy production-ready CSS in one click.",
    heroTitle: "Build CSS gradients visually",
    heroSubtitle:
      "Combine colors, set the direction, and copy clean, production-ready CSS for your gradient.",
    intro: [
      "Gradients add depth, energy, and a modern feel to backgrounds, buttons, and hero sections. Writing the CSS by hand, though, means remembering syntax and tweaking angles blind.",
      "This generator lets you pick colors and a direction, preview the result live, and copy the exact CSS you need — no syntax memorization required.",
    ],
    howTo: [
      {
        title: "Pick your colors",
        text: "Choose two or more colors to blend across the gradient.",
      },
      {
        title: "Set the direction",
        text: "Select an angle or named direction such as to right or to bottom.",
      },
      {
        title: "Copy the CSS",
        text: "Grab the generated background property and paste it into your stylesheet.",
      },
    ],
    examples: [
      {
        label: "Hero backgrounds",
        text: "A soft two-color gradient makes a landing page feel premium instantly.",
      },
      {
        label: "Buttons",
        text: "Subtle gradients give calls to action a tactile, clickable quality.",
      },
      {
        label: "Cards & overlays",
        text: "Use a gradient overlay to keep text readable over imagery.",
      },
    ],
    whyItMatters: [
      "CSS gradients are rendered by the browser, so they stay crisp at any size with zero image weight.",
      "A live preview removes the trial-and-error of guessing angles and color stops.",
      "Copy-ready CSS means you spend time designing, not debugging syntax.",
    ],
    faqs: [
      {
        question: "What CSS does this generate?",
        answer:
          "It produces a linear-gradient() value for the CSS background property, including your chosen direction and color stops.",
      },
      {
        question: "Can I use more than two colors?",
        answer:
          "Yes. Add multiple color stops to create rich, multi-color gradients that still render smoothly.",
      },
      {
        question: "Are CSS gradients good for performance?",
        answer:
          "Very. They’re drawn by the browser with no extra HTTP request or image download, making them faster than gradient images.",
      },
    ],
    relatedTools: ["palette-generator", "shades-and-tints-generator", "css-color-preview"],
  },
  {
    title: "Image Color Picker",
    slug: "image-color-picker",
    description:
      "Extract dominant colors and palettes from uploaded images in your browser.",
    category: "Extractor",
    icon: "🖼️",
    accent: "var(--cc-primary)",
    interactive: true,
    seoTitle: "Image Color Picker — Extract a Palette From Any Photo",
    seoDescription:
      "Upload an image and extract its dominant colors and palette right in your browser. Nothing is uploaded to a server — it’s 100% private.",
    heroTitle: "Extract colors from any image",
    heroSubtitle:
      "Upload a photo and pull out its dominant colors and a ready-to-use palette — all processed privately in your browser.",
    intro: [
      "Some of the best palettes come straight from photography, artwork, or product shots. Pulling those colors out by eye is slow and imprecise.",
      "This picker analyzes your image directly in the browser and surfaces its most prominent colors as a copyable palette. Your file never leaves your device — all processing happens locally for complete privacy.",
    ],
    howTo: [
      {
        title: "Upload an image",
        text: "Choose any photo or graphic from your device. It’s read locally, never uploaded.",
      },
      {
        title: "Review the palette",
        text: "The tool extracts the dominant colors and shows them as swatches.",
      },
      {
        title: "Copy your colors",
        text: "Copy any HEX value, or the whole palette, into your project.",
      },
    ],
    examples: [
      {
        label: "Moodboards",
        text: "Build a palette from an inspiration photo to anchor a new design.",
      },
      {
        label: "Brand from a product",
        text: "Extract colors from product photography to keep marketing on-brand.",
      },
      {
        label: "Match a hero image",
        text: "Pull accent colors from a hero photo so your UI feels cohesive with it.",
      },
    ],
    whyItMatters: [
      "Photographs contain naturally harmonious color relationships you can borrow for design.",
      "Browser-only processing keeps your images completely private — nothing is uploaded.",
      "Turning an image into HEX codes bridges the gap between inspiration and implementation.",
    ],
    faqs: [
      {
        question: "Are my images uploaded to a server?",
        answer:
          "No. Images are read and analyzed entirely in your browser using the canvas API. Your files never leave your device.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "Common web formats such as JPG, PNG, WebP, and GIF work. Anything your browser can display can be analyzed.",
      },
      {
        question: "How are the dominant colors chosen?",
        answer:
          "The tool samples pixels across the image and groups similar colors to surface the most representative swatches.",
      },
    ],
    relatedTools: ["palette-generator", "color-compare", "shades-and-tints-generator"],
  },
  {
    title: "Color Blindness Simulator",
    slug: "color-blindness-simulator",
    description:
      "Preview how color combinations may appear to users with different color vision types.",
    category: "Accessibility",
    icon: "👁️",
    accent: "var(--cc-green)",
    interactive: true,
    seoTitle: "Color Blindness Simulator — Preview Colors for CVD",
    seoDescription:
      "See how your colors and palettes may look to people with protanopia, deuteranopia, tritanopia, and total color blindness. Build more inclusive designs.",
    heroTitle: "Simulate color vision deficiencies",
    heroSubtitle:
      "Preview how your colors may appear to people with the most common types of color blindness.",
    intro: [
      "Roughly 1 in 12 men and 1 in 200 women experience some form of color vision deficiency (CVD). Designs that rely on color alone — a red error and a green success, for example — can become ambiguous or invisible to them.",
      "This simulator applies approximations of common CVD types so you can preview how a palette might be perceived and adjust before it ships. Use it as a guide alongside, not a replacement for, testing with real users.",
    ],
    howTo: [
      {
        title: "Enter your colors",
        text: "Add the colors or palette you want to evaluate.",
      },
      {
        title: "Compare the simulations",
        text: "View side-by-side previews for protanopia, deuteranopia, tritanopia, and grayscale vision.",
      },
      {
        title: "Adjust for clarity",
        text: "If two colors collapse into one, add labels, patterns, or pick more distinct hues.",
      },
    ],
    examples: [
      {
        label: "Status colors",
        text: "Check that success and error states stay distinguishable, not just red vs green.",
      },
      {
        label: "Charts & graphs",
        text: "Confirm data series remain separable without relying on hue alone.",
      },
      {
        label: "Maps & legends",
        text: "Ensure categories on a map can still be told apart.",
      },
    ],
    whyItMatters: [
      "Never relying on color alone is a core WCAG principle — pairing color with text or icons helps everyone.",
      "Simulating CVD early surfaces problems while they’re still cheap to fix.",
      "Inclusive color choices widen your audience and improve usability for all users.",
    ],
    faqs: [
      {
        question: "How accurate is the simulation?",
        answer:
          "It uses well-known mathematical approximations of color vision deficiencies. Real perception varies between individuals, so treat results as a helpful guide rather than a precise medical model.",
      },
      {
        question: "What types of color blindness are covered?",
        answer:
          "The simulator covers protanopia and deuteranopia (red-green), tritanopia (blue-yellow), and achromatopsia (total color blindness / grayscale).",
      },
      {
        question: "How do I design for color blindness?",
        answer:
          "Don’t rely on color alone. Add text labels, icons, or patterns, and ensure sufficient contrast so meaning survives even when hues are hard to tell apart.",
      },
    ],
    relatedTools: ["contrast-checker", "color-compare", "palette-generator"],
  },
  {
    title: "Shades & Tints Generator",
    slug: "shades-and-tints-generator",
    description: "Create lighter tints and darker shades from any base color.",
    category: "Generator",
    icon: "🎚️",
    accent: "var(--cc-pink)",
    interactive: true,
    seoTitle: "Shades & Tints Generator — Build a Color Scale From One Color",
    seoDescription:
      "Generate 10 tints and 10 shades from any base color to build a complete color scale for design systems and UI states. Copy every HEX value.",
    heroTitle: "Generate shades and tints",
    heroSubtitle:
      "Turn one base color into a full scale of lighter tints and darker shades, ready to copy.",
    intro: [
      "Modern design systems don’t use a single color — they use a scale. From a light tint for backgrounds to a deep shade for text, those steps come from one base hue and give an interface consistency and depth.",
      "Enter a base color and this tool builds ten lighter tints and ten darker shades around it, each with a copyable HEX value, so you can drop a complete scale into your design tokens.",
    ],
    howTo: [
      {
        title: "Pick a base color",
        text: "Enter the central color you want to build a scale around.",
      },
      {
        title: "Review the scale",
        text: "See ten tints stepping toward white and ten shades stepping toward black.",
      },
      {
        title: "Copy the values",
        text: "Copy any individual step, or the full scale, into your design system.",
      },
    ],
    examples: [
      {
        label: "Design tokens",
        text: "Build a 10-step color scale like the ones used in component libraries.",
      },
      {
        label: "Hover & active states",
        text: "Use a slightly darker shade for button hover and active states.",
      },
      {
        label: "Backgrounds",
        text: "Pick a very light tint for subtle section and card backgrounds.",
      },
    ],
    whyItMatters: [
      "A consistent scale derived from one hue keeps an interface feeling cohesive.",
      "Tints and shades give you ready-made UI states — hover, active, disabled — without guessing.",
      "Generating the scale mathematically is faster and more even than nudging colors by hand.",
    ],
    faqs: [
      {
        question: "What’s the difference between a tint and a shade?",
        answer:
          "A tint is a color mixed with white (lighter), while a shade is a color mixed with black (darker). A tone, for completeness, is a color mixed with gray.",
      },
      {
        question: "How many steps are generated?",
        answer:
          "The tool produces ten tints and ten shades, giving you a 20-step range around your base color to choose from.",
      },
      {
        question: "Can I use this for a design system?",
        answer:
          "Yes. The generated scale is a great starting point for color tokens. You may fine-tune individual steps to hit specific contrast targets.",
      },
    ],
    relatedTools: ["palette-generator", "gradient-generator", "color-compare"],
  },
  {
    title: "CSS Color Preview",
    slug: "css-color-preview",
    description:
      "Preview named CSS colors, HEX, RGB, HSL, gradients, and alpha values.",
    category: "CSS",
    icon: "💧",
    accent: "var(--cc-cyan)",
    interactive: true,
    seoTitle: "CSS Color Preview — Test Any CSS Color Value Live",
    seoDescription:
      "Type any CSS color — named, HEX, RGB, HSL, or with alpha — and preview it instantly. See the normalized HEX, RGB, and HSL equivalents.",
    heroTitle: "Preview any CSS color value",
    heroSubtitle:
      "Type a named color, HEX, RGB, or HSL value and see it rendered live with all its equivalent formats.",
    intro: [
      "CSS accepts colors in many forms — keywords like rebeccapurple, HEX codes, rgb(), and hsl(). It’s easy to lose track of exactly what a value renders to, especially when you’re reading someone else’s stylesheet.",
      "Paste any CSS color string and this tool shows you the rendered color along with its normalized HEX, RGB, and HSL equivalents, so there’s no ambiguity about what you’re looking at.",
    ],
    howTo: [
      {
        title: "Enter a CSS color",
        text: "Type a named color, HEX, rgb(), or hsl() value.",
      },
      {
        title: "See it rendered",
        text: "A live swatch shows the exact color the browser would display.",
      },
      {
        title: "Read the equivalents",
        text: "View the normalized HEX, RGB, and HSL values for the same color.",
      },
    ],
    examples: [
      {
        label: "Decode a keyword",
        text: "Find out exactly what color names like tomato or steelblue render to.",
      },
      {
        label: "Verify a value",
        text: "Confirm a HEX or rgb() string produces the color you expect.",
      },
      {
        label: "Convert on the fly",
        text: "Paste one format and read off the others without leaving the page.",
      },
    ],
    whyItMatters: [
      "CSS supports many color notations; seeing them side by side removes guesswork.",
      "Named colors are convenient but opaque — previewing them makes their real values clear.",
      "Quick verification prevents subtle color bugs from slipping into production.",
    ],
    faqs: [
      {
        question: "Which CSS color formats are supported?",
        answer:
          "You can enter named CSS colors, 3- or 6-digit HEX codes, rgb()/rgba(), and hsl()/hsla() values.",
      },
      {
        question: "How many named CSS colors are there?",
        answer:
          "CSS defines around 140 named colors, from common ones like red and blue to specific shades like rebeccapurple and lightgoldenrodyellow.",
      },
      {
        question: "What does ‘normalized’ mean here?",
        answer:
          "It means the tool converts whatever you enter into a single canonical form — a 6-digit HEX plus matching RGB and HSL — so you always know the exact color.",
      },
    ],
    relatedTools: ["hex-to-rgb", "rgb-to-hex", "gradient-generator"],
  },
];

export const toolsBySlug: Record<string, Tool> = Object.fromEntries(
  tools.map((t) => [t.slug, t])
);

export function getTool(slug: string): Tool | undefined {
  return toolsBySlug[slug];
}

export const toolCategories: ToolCategory[] = [
  "Core",
  "Accessibility",
  "Generator",
  "Converter",
  "Extractor",
  "CSS",
];
