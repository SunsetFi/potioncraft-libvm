import { base } from "astro:config/client";

export function getRecipeHref(recipeId: string) {
  return `${base}/recipes/${recipeId}`;
}
