/**
 * Color math used across every ColorCompare tool.
 * Pure functions, no DOM access — safe to import in islands and at build time.
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface CMYK {
  c: number;
  m: number;
  y: number;
  k: number;
}

const clamp = (n: number, min = 0, max = 255) => Math.min(max, Math.max(min, n));
const round = (n: number) => Math.round(n);

/** CSS named colors we support without a DOM. Covers the common set. */
export const CSS_NAMED_COLORS: Record<string, string> = {
  black: "#000000", silver: "#c0c0c0", gray: "#808080", white: "#ffffff",
  maroon: "#800000", red: "#ff0000", purple: "#800080", fuchsia: "#ff00ff",
  green: "#008000", lime: "#00ff00", olive: "#808000", yellow: "#ffff00",
  navy: "#000080", blue: "#0000ff", teal: "#008080", aqua: "#00ffff",
  orange: "#ffa500", aliceblue: "#f0f8ff", antiquewhite: "#faebd7",
  aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4",
  blanchedalmond: "#ffebcd", blueviolet: "#8a2be2", brown: "#a52a2a",
  burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00",
  chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b",
  darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9",
  darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc",
  darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1",
  darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff",
  dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222",
  floralwhite: "#fffaf0", forestgreen: "#228b22", gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520",
  greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4",
  indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c",
  lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080",
  lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3",
  lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899",
  lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", limegreen: "#32cd32",
  linen: "#faf0e6", magenta: "#ff00ff", mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db",
  mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa",
  mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead",
  oldlace: "#fdf5e6", olivedrab: "#6b8e23", orangered: "#ff4500",
  orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98",
  paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5",
  peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd",
  powderblue: "#b0e0e6", rosybrown: "#bc8f8f", royalblue: "#4169e1",
  saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460",
  seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d",
  skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090",
  snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c",
  thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee",
  wheat: "#f5deb3", whitesmoke: "#f5f5f5", yellowgreen: "#9acd32",
  rebeccapurple: "#663399",
};

/** Normalize and validate a HEX string. Returns 6-digit lowercase hex or null. */
export function normalizeHex(input: string): string | null {
  if (!input) return null;
  let hex = input.trim().toLowerCase();
  if (hex.startsWith("#")) hex = hex.slice(1);
  if (/^[0-9a-f]{3}$/.test(hex)) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  if (/^[0-9a-f]{8}$/.test(hex)) {
    hex = hex.slice(0, 6); // drop alpha for core conversions
  }
  if (/^[0-9a-f]{6}$/.test(hex)) return `#${hex}`;
  return null;
}

/** Parse any supported color string (hex, rgb(), hsl(), named) into RGB. */
export function parseColor(input: string): RGB | null {
  if (!input) return null;
  const value = input.trim().toLowerCase();

  // named
  if (CSS_NAMED_COLORS[value]) return hexToRgb(CSS_NAMED_COLORS[value]);

  // hex
  const hex = normalizeHex(value);
  if (hex) return hexToRgb(hex);

  // rgb / rgba
  const rgbMatch = value.match(
    /^rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)/
  );
  if (rgbMatch) {
    return {
      r: clamp(round(parseFloat(rgbMatch[1]))),
      g: clamp(round(parseFloat(rgbMatch[2]))),
      b: clamp(round(parseFloat(rgbMatch[3]))),
    };
  }

  // hsl / hsla
  const hslMatch = value.match(
    /^hsla?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)%\s*[, ]\s*([\d.]+)%/
  );
  if (hslMatch) {
    return hslToRgb({
      h: parseFloat(hslMatch[1]),
      s: parseFloat(hslMatch[2]),
      l: parseFloat(hslMatch[3]),
    });
  }

  return null;
}

export function hexToRgb(hex: string): RGB | null {
  const norm = normalizeHex(hex);
  if (!norm) return null;
  const int = parseInt(norm.slice(1), 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

export function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (n: number) => clamp(round(n)).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === rn) h = ((gn - bn) / delta) % 6;
    else if (max === gn) h = (bn - rn) / delta + 2;
    else h = (rn - gn) / delta + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return { h: round(h), s: round(s * 100), l: round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const hn = ((h % 360) + 360) % 360;
  const sn = clamp(s, 0, 100) / 100;
  const ln = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((hn / 60) % 2) - 1));
  const m = ln - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (hn < 60) [r, g, b] = [c, x, 0];
  else if (hn < 120) [r, g, b] = [x, c, 0];
  else if (hn < 180) [r, g, b] = [0, c, x];
  else if (hn < 240) [r, g, b] = [0, x, c];
  else if (hn < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return {
    r: round((r + m) * 255),
    g: round((g + m) * 255),
    b: round((b + m) * 255),
  };
}

export function rgbToCmyk({ r, g, b }: RGB): CMYK {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = (1 - rn - k) / (1 - k);
  const m = (1 - gn - k) / (1 - k);
  const y = (1 - bn - k) / (1 - k);
  return {
    c: round(c * 100),
    m: round(m * 100),
    y: round(y * 100),
    k: round(k * 100),
  };
}

export function cmykToRgb({ c, m, y, k }: CMYK): RGB {
  const cn = c / 100;
  const mn = m / 100;
  const yn = y / 100;
  const kn = k / 100;
  return {
    r: round(255 * (1 - cn) * (1 - kn)),
    g: round(255 * (1 - mn) * (1 - kn)),
    b: round(255 * (1 - yn) * (1 - kn)),
  };
}

/* ---------- Formatting helpers ---------- */

export const formatRgb = ({ r, g, b }: RGB) => `rgb(${r}, ${g}, ${b})`;
export const formatHsl = ({ h, s, l }: HSL) => `hsl(${h}, ${s}%, ${l}%)`;
export const formatCmyk = ({ c, m, y, k }: CMYK) =>
  `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;

/* ---------- Contrast + WCAG ---------- */

/** Relative luminance per WCAG 2.1. */
export function relativeLuminance({ r, g, b }: RGB): number {
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG contrast ratio between two colors, 1–21. */
export function contrastRatio(a: RGB, b: RGB): number {
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export interface WcagResult {
  ratio: number;
  ratioLabel: string;
  aaNormal: boolean;
  aaLarge: boolean;
  aaaNormal: boolean;
  aaaLarge: boolean;
  uiComponents: boolean;
}

export function evaluateWcag(fg: RGB, bg: RGB): WcagResult {
  const ratio = contrastRatio(fg, bg);
  return {
    ratio,
    ratioLabel: `${ratio.toFixed(2)}:1`,
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaaNormal: ratio >= 7,
    aaaLarge: ratio >= 4.5,
    uiComponents: ratio >= 3,
  };
}

/** Pick black or white text for best contrast against a background. */
export function readableTextColor(bg: RGB): string {
  return contrastRatio(bg, { r: 0, g: 0, b: 0 }) >=
    contrastRatio(bg, { r: 255, g: 255, b: 255 })
    ? "#000000"
    : "#ffffff";
}

/* ---------- Palette generation ---------- */

export type HarmonyMode =
  | "complementary"
  | "analogous"
  | "triadic"
  | "tetradic"
  | "monochromatic";

function rotate(h: number, deg: number) {
  return ((h + deg) % 360 + 360) % 360;
}

export function generateHarmony(baseHex: string, mode: HarmonyMode): string[] {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return [];
  const hsl = rgbToHsl(rgb);
  const make = (h: number, s = hsl.s, l = hsl.l) =>
    rgbToHex(hslToRgb({ h, s, l }));

  switch (mode) {
    case "complementary":
      return [make(hsl.h), make(rotate(hsl.h, 180))];
    case "analogous":
      return [
        make(rotate(hsl.h, -30)),
        make(hsl.h),
        make(rotate(hsl.h, 30)),
      ];
    case "triadic":
      return [make(hsl.h), make(rotate(hsl.h, 120)), make(rotate(hsl.h, 240))];
    case "tetradic":
      return [
        make(hsl.h),
        make(rotate(hsl.h, 90)),
        make(rotate(hsl.h, 180)),
        make(rotate(hsl.h, 270)),
      ];
    case "monochromatic":
      return [
        make(hsl.h, hsl.s, clamp(hsl.l + 28, 0, 95)),
        make(hsl.h, hsl.s, clamp(hsl.l + 14, 0, 92)),
        make(hsl.h, hsl.s, hsl.l),
        make(hsl.h, hsl.s, clamp(hsl.l - 14, 5, 100)),
        make(hsl.h, hsl.s, clamp(hsl.l - 28, 5, 100)),
      ];
    default:
      return [make(hsl.h)];
  }
}

/** Generate `count` tints (toward white) of a base color. */
export function generateTints(baseHex: string, count = 10): string[] {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return [];
  const out: string[] = [];
  for (let i = 1; i <= count; i++) {
    const f = i / (count + 1);
    out.push(
      rgbToHex({
        r: rgb.r + (255 - rgb.r) * f,
        g: rgb.g + (255 - rgb.g) * f,
        b: rgb.b + (255 - rgb.b) * f,
      })
    );
  }
  return out;
}

/** Generate `count` shades (toward black) of a base color. */
export function generateShades(baseHex: string, count = 10): string[] {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return [];
  const out: string[] = [];
  for (let i = 1; i <= count; i++) {
    const f = i / (count + 1);
    out.push(
      rgbToHex({
        r: rgb.r * (1 - f),
        g: rgb.g * (1 - f),
        b: rgb.b * (1 - f),
      })
    );
  }
  return out;
}

/* ---------- Color-blindness simulation ---------- */

export type ColorVision =
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia";

/** Linear-RGB transform matrices (Brettel/Viénot-style approximations). */
const CVD_MATRICES: Record<ColorVision, number[][]> = {
  protanopia: [
    [0.567, 0.433, 0.0],
    [0.558, 0.442, 0.0],
    [0.0, 0.242, 0.758],
  ],
  deuteranopia: [
    [0.625, 0.375, 0.0],
    [0.7, 0.3, 0.0],
    [0.0, 0.3, 0.7],
  ],
  tritanopia: [
    [0.95, 0.05, 0.0],
    [0.0, 0.433, 0.567],
    [0.0, 0.475, 0.525],
  ],
  achromatopsia: [
    [0.299, 0.587, 0.114],
    [0.299, 0.587, 0.114],
    [0.299, 0.587, 0.114],
  ],
};

export function simulateColorVision(rgb: RGB, type: ColorVision): RGB {
  const m = CVD_MATRICES[type];
  return {
    r: clamp(round(m[0][0] * rgb.r + m[0][1] * rgb.g + m[0][2] * rgb.b)),
    g: clamp(round(m[1][0] * rgb.r + m[1][1] * rgb.g + m[1][2] * rgb.b)),
    b: clamp(round(m[2][0] * rgb.r + m[2][1] * rgb.g + m[2][2] * rgb.b)),
  };
}

/* ---------- Misc ---------- */

/** A pleasant random hex for "surprise me" actions. */
export function randomHex(seed: number): string {
  // Deterministic-ish pleasant color from a numeric seed (no Math.random needed).
  const h = (seed * 47) % 360;
  const s = 55 + (seed % 30);
  const l = 45 + (seed % 20);
  return rgbToHex(hslToRgb({ h, s, l }));
}

export interface ColorReport {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  cmyk: CMYK;
  luminance: number;
  textColor: string;
}

/** One call -> all representations of a color, for tool result panels. */
export function describeColor(input: string): ColorReport | null {
  const rgb = parseColor(input);
  if (!rgb) return null;
  return {
    hex: rgbToHex(rgb),
    rgb,
    hsl: rgbToHsl(rgb),
    cmyk: rgbToCmyk(rgb),
    luminance: relativeLuminance(rgb),
    textColor: readableTextColor(rgb),
  };
}
