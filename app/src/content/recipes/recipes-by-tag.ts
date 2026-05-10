import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";
import { includesTag } from "../tags/includes-tag";

export async function getRecipesByTag(
  tag: string,
): Promise<CollectionEntry<"recipes">[]> {
  tag = tag.toLowerCase();
  const recipes = await resolveRecipes();
  return recipes.filter((recipe) => includesTag(recipe.data.tags, tag));
}
