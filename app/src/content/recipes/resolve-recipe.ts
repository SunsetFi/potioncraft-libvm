import { getCollection } from "astro:content";
import type { RecipeEntry } from "./types/RecipeEntry";
import type { RecipeId } from "./types/RecipeId";

export async function resolveRecipe(id: RecipeId): Promise<RecipeEntry | null> {
  const recipes = await resolveRecipes();

  const recipe = recipes.find((i) => i.id === id);
  return recipe ?? null;
}

let recipeCache: Promise<RecipeEntry[]> | undefined;
export async function resolveRecipes(): Promise<RecipeEntry[]> {
  if (!recipeCache) {
    recipeCache = getCollection("recipes");
  }
  const recipes = await recipeCache;
  return recipes;
}
