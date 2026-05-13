import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { ingredientsCollection } from "./content/ingredients/collection";
import { recipesCollection } from "./content/recipes/collection";
import { effectsCollection } from "./content/effects/collection";
import { tagsCollection } from "./content/tags/collection";
import { saltsCollection } from "./content/salts/collection";
import { alchemyMachineRecipesCollection } from "./content/alchemy-machine-recipes/collection";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  alchemyMachineRecipes: alchemyMachineRecipesCollection,
  effects: effectsCollection,
  ingredients: ingredientsCollection,
  recipes: recipesCollection,
  salts: saltsCollection,
  tags: tagsCollection,
};
