import { base } from "astro:config/client";
import type { IngredientId } from "./types/IngredientId";

export function getIngredientHref(ingredientId: IngredientId) {
  return `${base}/ingredients/${ingredientId.toLowerCase()}`;
}
