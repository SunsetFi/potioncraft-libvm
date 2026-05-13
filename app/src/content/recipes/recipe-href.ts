import { base } from "astro:config/client";
import type { RecipeId } from "./types/RecipeId";

export function getRecipeHref(recipeId: RecipeId) {
  return `${base}/recipes/${recipeId}`;
}
