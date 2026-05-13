import type { CollectionEntry } from "astro:content";

export type RecipesSortCriteria = "cost" | "ingredient-count";

export function sortRecipes(
  recipes: CollectionEntry<"recipes">[],
  by: RecipesSortCriteria,
): CollectionEntry<"recipes">[] {
  recipes = recipes.toSorted((a, b) => {
    const av = getSortCriteria(a, by);
    const bv = getSortCriteria(b, by);
    return av - bv;
  });

  return recipes;
}

function getSortCriteria(
  recipe: CollectionEntry<"recipes">,
  by: RecipesSortCriteria,
): number {
  switch (by) {
    case "cost":
      return recipe.data.cost;
    case "ingredient-count":
      return recipe.data.ingredients.length;
  }
}
