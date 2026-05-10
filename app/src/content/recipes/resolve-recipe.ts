import { getCollection, type CollectionEntry } from "astro:content";

export async function resolveRecipe(id: string): Promise<CollectionEntry<"recipes"> | null> {
  const recipes = await resolveRecipes();

  const recipe = recipes.find((i) => i.id === id);
  return recipe ?? null;
}

let recipeCache: Promise<CollectionEntry<"recipes">[]> | undefined;
export async function resolveRecipes() {
  if (!recipeCache) {
    recipeCache = getCollection("recipes");
  }
  const recipes = await recipeCache;
  return recipes;
}
