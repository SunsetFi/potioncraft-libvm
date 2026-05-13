import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";
import { filterRecipes } from "./filter-recipes";

export async function getRecipesByEffect(
  effectId: string,
  tier?: number,
): Promise<CollectionEntry<"recipes">[]> {
  effectId = effectId.toLowerCase();
  const recipes = await resolveRecipes();
  return filterRecipes(recipes, { effects: { [effectId]: tier ?? 1 } });
}
