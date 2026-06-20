/**
 * JSON-LD structured data builders. Each returns a plain object that gets
 * serialized into a <script type="application/ld+json"> tag.
 */
import { SITE, absoluteUrl } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/tools/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/favicon-32x32.png"),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function softwareAppSchema(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    applicationCategory: opts.category ?? "DesignApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/favicon-32x32.png") },
    },
    image: absoluteUrl(opts.image ?? SITE.defaultOgImage),
  };
}
