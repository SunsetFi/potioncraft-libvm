import { getCollection } from "astro:content";
import type { IngredientEntry } from "./types/IngredientEntry";
import type { IngredientId } from "./types/IngredientId";

export async function resolveIngredient(
  id: IngredientId,
): Promise<IngredientEntry | null> {
  const ingredients = await resolveIngredients();

  const idLower = id.toLowerCase();

  const ingredient = ingredients.find(
    (ingredient) => ingredient.id.toLowerCase() === idLower,
  );
  return ingredient ?? null;
}

let ingredientCache: Promise<IngredientEntry[]> | undefined;
export async function resolveIngredients() {
  if (!ingredientCache) {
    ingredientCache = getCollection("ingredients");
  }
  const ingredients = await ingredientCache;
  return ingredients;
}
