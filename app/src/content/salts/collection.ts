import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const saltsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/salts/_/" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      pricePerGrain: z.number(),
      icon: image().optional(),
    }),
});
