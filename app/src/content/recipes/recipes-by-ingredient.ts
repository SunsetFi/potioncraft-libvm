import { resolveRecipes } from "./resolve-recipe";
import type { RecipeEntry } from "./types/RecipeEntry";
import type { IngredientId } from "../ingredients/types/IngredientId";
import { filterRecipes } from "./filter-recipes";

export async function getRecipesByIngredient(
  ingredient: IngredientId,
): Promise<RecipeEntry[]> {
  const recipes = await resolveRecipes();
  return filterRecipes(recipes, { ingredients: [ingredient] });
}
