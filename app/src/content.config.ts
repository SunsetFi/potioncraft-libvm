import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { ingredientsCollection } from "./ingredients/collection";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  ingredients: ingredientsCollection,
};
