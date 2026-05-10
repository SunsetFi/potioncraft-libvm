import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const effectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/effects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      basePrice: z.number(),
      potionColor: z.string(),
      icon: image().optional(),
    }),
});
