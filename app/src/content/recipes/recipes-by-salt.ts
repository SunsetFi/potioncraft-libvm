import { resolveRecipes } from "./resolve-recipe";
import type { RecipeEntry } from "./types/RecipeEntry";
import type { SaltId } from "../salts/types/SaltId";
import { filterRecipes } from "./filter-recipes";

export async function getRecipesBySalt(saltId: SaltId): Promise<RecipeEntry[]> {
  const recipes = await resolveRecipes();
  return filterRecipes(recipes, { salts: [saltId] });
}
