import { base } from "astro:config/client";

export function ingredientHref(ingredientId: string) {
  return `${base}/ingredients/${ingredientId.toLowerCase()}`;
}
