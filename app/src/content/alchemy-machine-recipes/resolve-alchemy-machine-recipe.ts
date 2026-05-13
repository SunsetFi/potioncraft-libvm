import { getCollection } from "astro:content";
import type { AlchemyMachineRecipeId } from "./types/AlchemyMachineRecipeId";
import type { AlchemyMachineRecipeEntry } from "./types/AlchemyMachineRecipeEntry";

export async function resolveAlchemyMachineRecipe(
  id: AlchemyMachineRecipeId,
): Promise<AlchemyMachineRecipeEntry | null> {
  const recipes = await resolveAlchemyMachineRecipes();

  const lowerId = id.toLowerCase();

  const effect = recipes.find((recipe) => recipe.id.toLowerCase() === lowerId);
  return effect ?? null;
}

let reagentCache: Promise<AlchemyMachineRecipeEntry[]> | undefined;
export async function resolveAlchemyMachineRecipes() {
  if (!reagentCache) {
    reagentCache = getCollection("alchemyMachineRecipes");
  }
  return await reagentCache;
}
