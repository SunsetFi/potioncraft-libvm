import { resolveRecipes } from "./resolve-recipe";
import { filterRecipes } from "./filter-recipes";
import type { RecipeEntry } from "./types/RecipeEntry";
import type { EffectId } from "../effects/types/EffectId";

export async function getRecipesByEffect(
  effectId: EffectId,
  tier?: number,
): Promise<RecipeEntry[]> {
  const recipes = await resolveRecipes();
  return filterRecipes(recipes, { effects: { [effectId]: tier ?? 1 } });
}
