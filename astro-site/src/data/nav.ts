export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

/** Primary header navigation. */
export const mainNav: NavItem[] = [
  { label: "Tools", href: "/tools/" },
  { label: "Palettes", href: "/colors/" },
  { label: "Accessibility", href: "/tools/contrast-checker/" },
  { label: "Generators", href: "/tools/palette-generator/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
];

export const headerCta: NavItem = {
  label: "Open Tool",
  href: "/tools/color-compare/",
};

/** Footer link columns. */
export const footerColumns: FooterColumn[] = [
  {
    title: "Tools",
    links: [
      { label: "Color Compare", href: "/tools/color-compare/" },
      { label: "Contrast Checker", href: "/tools/contrast-checker/" },
      { label: "Palette Generator", href: "/tools/palette-generator/" },
      { label: "HEX to RGB", href: "/tools/hex-to-rgb/" },
      { label: "Gradient Generator", href: "/tools/gradient-generator/" },
      { label: "All Tools", href: "/tools/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Color Theory Basics", href: "/blog/color-theory-basics/" },
      { label: "Website Color Combinations", href: "/blog/best-website-color-combinations/" },
      { label: "Accessible UI Colors", href: "/blog/accessible-ui-colors/" },
    ],
  },
  {
    title: "Popular Colors",
    links: [
      { label: "Blue Palettes", href: "/colors/blue-palettes/" },
      { label: "Black & Gold", href: "/colors/black-and-gold/" },
      { label: "Pastel Palettes", href: "/colors/pastel-palettes/" },
      { label: "Website Color Schemes", href: "/colors/website-color-schemes/" },
      { label: "All Palettes", href: "/colors/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "About", href: "/about/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms", href: "/terms/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];
