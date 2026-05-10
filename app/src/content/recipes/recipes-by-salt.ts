import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";
import { includesSalt } from "../salts/includes-salt";

export async function getRecipesBySalt(
  saltId: string,
): Promise<CollectionEntry<"recipes">[]> {
  saltId = saltId.toLowerCase();
  const recipes = await resolveRecipes();
  return recipes.filter((recipe) => includesSalt(recipe.data?.salts, saltId));
}
