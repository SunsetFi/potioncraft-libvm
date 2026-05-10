import { base } from "astro:config/client";

export function getIngredientHref(ingredientId: string) {
  return `${base}/ingredients/${ingredientId.toLowerCase()}`;
}
