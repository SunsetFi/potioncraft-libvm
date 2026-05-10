import { getCollection, type CollectionEntry } from "astro:content";
import { getIngredientIdFromSlug } from "./collection";

let ingredientCache: Promise<CollectionEntry<"ingredients">[]> | undefined;

export async function resolveIngredient(
  id: string,
): Promise<CollectionEntry<"ingredients"> | null> {
  if (!ingredientCache) {
    ingredientCache = getCollection("ingredients");
  }
  const ingredients = await ingredientCache;

  id = id.toLowerCase();

  const ingredient = ingredients.find(
    (ingredient) => getIngredientIdFromSlug(ingredient.id).toLowerCase() === id,
  );
  return ingredient ?? null;
}
