import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";
import { includesEffect } from "../effects/includes-effect";

export async function getRecipesByEffect(effectId: string): Promise<CollectionEntry<"recipes">[]> {
  effectId = effectId.toLowerCase();
  const recipes = await resolveRecipes();
  return recipes.filter((recipe) => includesEffect(recipe.data.effects, effectId));
}
