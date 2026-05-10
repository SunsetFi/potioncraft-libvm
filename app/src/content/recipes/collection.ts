import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const recipesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes/_/" }),
  schema: () =>
    z.object({
      name: z.string(),
      datastring: z.string(),
      base: z.union([z.literal("water"), z.literal("wine"), z.literal("oil")]),
      effects: z.record(z.string(), z.number()),
      ingredients: z.record(z.string(), z.number()),
      cost: z.number(),
      tags: z.array(z.string()),
    }),
});
