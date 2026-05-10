import { getCollection, type CollectionEntry } from "astro:content";

let recipeCache: Promise<CollectionEntry<"recipes">[]> | undefined;

export async function resolveRecipe(
  id: string,
): Promise<CollectionEntry<"recipes"> | null> {
  if (!recipeCache) {
    recipeCache = getCollection("recipes");
  }
  const recipes = await recipeCache;

  const recipe = recipes.find((i) => i.id === id);
  return recipe ?? null;
}

export async function resolveRecipes() {
  if (!recipeCache) {
    recipeCache = getCollection("recipes");
  }
  const recipes = await recipeCache;
  console.log(`Resolved ${recipes.length} recipes`);
  return recipes;
}
