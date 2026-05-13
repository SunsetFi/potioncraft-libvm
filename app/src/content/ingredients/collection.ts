import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const ingredientsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/ingredients/_",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      basePrice: z.number(),
      groundColor: z.string(),
      path: z.string(),
      icon: image().optional(),
    }),
});
