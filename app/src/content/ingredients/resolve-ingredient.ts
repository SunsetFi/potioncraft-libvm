import { getCollection, type CollectionEntry } from "astro:content";

let ingredientCache: Promise<CollectionEntry<"ingredients">[]> | undefined;

export async function resolveIngredient(
  id: string,
): Promise<CollectionEntry<"ingredients"> | null> {
  if (!ingredientCache) {
    ingredientCache = getCollection("ingredients");
  }
  const ingredients = await ingredientCache;

  id = id.toLowerCase();

  const ingredient = ingredients.find((i) => i.id === id);
  return ingredient ?? null;
}
