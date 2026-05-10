import { getCollection, type CollectionEntry } from "astro:content";
import { getIngredientIdFromSlug } from "./collection";

export async function resolveIngredient(
  id: string,
): Promise<CollectionEntry<"ingredients"> | null> {
  const ingredients = await resolveIngredients();

  id = id.toLowerCase();

  const ingredient = ingredients.find(
    (ingredient) => getIngredientIdFromSlug(ingredient.id).toLowerCase() === id,
  );
  return ingredient ?? null;
}

let ingredientCache: Promise<CollectionEntry<"ingredients">[]> | undefined;
export async function resolveIngredients() {
  if (!ingredientCache) {
    ingredientCache = getCollection("ingredients");
  }
  const ingredients = await ingredientCache;
  return ingredients;
}
