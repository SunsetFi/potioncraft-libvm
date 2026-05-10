import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const tagsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tags/_/" }),
  schema: () =>
    z.object({
      name: z.string(),
    }),
});
