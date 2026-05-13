import type { TagId } from "../tags/types/TagId";
import { filterRecipes } from "./filter-recipes";
import { resolveRecipes } from "./resolve-recipe";
import type { RecipeEntry } from "./types/RecipeEntry";

export async function getRecipesByTag(tag: TagId): Promise<RecipeEntry[]> {
  const recipes = await resolveRecipes();
  return filterRecipes(recipes, { includeTags: [tag] });
}
