import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";

export async function getRecipesByEffect(
  effectId: string,
): Promise<CollectionEntry<"recipes">[]> {
  effectId = effectId.toLowerCase();
  const recipes = await resolveRecipes();
  return recipes.filter((recipe) =>
    includesEffect(recipe.data.effects, effectId),
  );
}

function includesEffect(
  recipes: Record<string, number>,
  recipeId: string,
): boolean {
  for (const [key, value] of Object.entries(recipes)) {
    if (value <= 0) {
      continue;
    }

    if (key === recipeId) {
      return true;
    }
  }
  return false;
}
