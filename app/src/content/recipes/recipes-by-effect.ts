import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";

export async function getRecipesByEffect(effectId: string): Promise<CollectionEntry<"recipes">[]> {
  effectId = effectId.toLowerCase();
  const recipes = await resolveRecipes();
  return recipes.filter((recipe) => Object.keys(recipe.data.effects).includes(effectId));
}
