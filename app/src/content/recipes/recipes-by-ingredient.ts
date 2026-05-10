import type { CollectionEntry } from "astro:content";
import { resolveRecipes } from "./resolve-recipe";
import { includesIngredient } from "../ingredients/includes-ingredient";

export async function getRecipesByIngredient(
  ingredient: string,
): Promise<CollectionEntry<"recipes">[]> {
  ingredient = ingredient.toLowerCase();
  const recipes = await resolveRecipes();
  return recipes.filter((recipe) =>
    includesIngredient(recipe.data.ingredients, ingredient),
  );
}
