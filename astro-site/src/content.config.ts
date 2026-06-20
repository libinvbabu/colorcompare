import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("ColorCompare Team"),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string(),
    seoDescription: z.string(),
    featured: z.boolean().default(false),
    /** Two accent colors used for the article's gradient cover. */
    cover: z.tuple([z.string(), z.string()]).default(["#6d5dfc", "#ff4fa3"]),
  }),
});

export const collections = { blog };
