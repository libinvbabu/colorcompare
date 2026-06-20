export const SITE = {
  name: "ColorCompare",
  url: "https://colorcompare.in",
  tagline: "All-in-one Color Tools for Designers & Developers",
  description:
    "Compare colors side by side, generate palettes, check accessibility, convert HEX RGB HSL CMYK, and discover color combinations for websites, brands, and logos.",
  defaultOgImage: "/images/og-default.jpg",
  twitter: "@colorcompare",
  locale: "en_US",
  themeColor: "#6d5dfc",
} as const;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean}`;
}

/** Ensure trailing slash for canonical consistency. */
export function canonicalPath(path: string): string {
  let p = path.startsWith("/") ? path : `/${path}`;
  if (!p.endsWith("/") && !p.includes(".")) p += "/";
  return p;
}
