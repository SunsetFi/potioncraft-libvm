import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const effectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/effects/_/" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      basePrice: z.number(),
      potionColor: z.string(),
      icon: image().optional(),
    }),
});

export function getEffectIdFromSlug(slug: string) {
  let id = slug;
  if (id.startsWith("/effects/")) {
    id = id.slice("/effects/".length);
  }

  if (id.endsWith(".md")) {
    id = id.slice(0, -".md".length);
  }

  return id;
}
