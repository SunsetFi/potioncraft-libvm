import type { RecipeEntry } from "./types/RecipeEntry";

export type RecipesSortCriteria = "cost" | "ingredient-count";

export function sortRecipes(
  recipes: RecipeEntry[],
  by: RecipesSortCriteria,
): RecipeEntry[] {
  recipes = recipes.toSorted((a, b) => {
    const av = getSortCriteria(a, by);
    const bv = getSortCriteria(b, by);

    if (av === bv) {
      const secondaryBy = getSecondarySortBy(by);
      const av2 = getSortCriteria(a, secondaryBy);
      const bv2 = getSortCriteria(b, secondaryBy);
      return av2 - bv2;
    }

    return av - bv;
  });

  return recipes;
}

function getSecondarySortBy(sortBy: RecipesSortCriteria): RecipesSortCriteria {
  switch (sortBy) {
    case "cost":
      return "ingredient-count";
    case "ingredient-count":
      return "cost";
  }
}

function getSortCriteria(recipe: RecipeEntry, by: RecipesSortCriteria): number {
  switch (by) {
    case "cost":
      return recipe.data.cost;
    case "ingredient-count":
      return Object.values(recipe.data.ingredients).reduce(
        (sum, value) => sum + value,
        0,
      );
  }
}
