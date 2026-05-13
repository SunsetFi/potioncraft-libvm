import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const alchemyMachineRecipesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/alchemy-machine-recipes/_/",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      requiredPotions: z.array(z.record(z.string(), z.number())),
      requiredReagent: z.string().optional(),
      produces: z.object({
        type: z.union([z.literal("salt"), z.literal("reagent")]),
        id: z.string(),
      }),
      icon: image().optional(),
      recipeImage: image().optional(),
    }),
});
