import type { CollectionEntry } from "astro:content";
import { includesEffect } from "../effects/includes-effect";

export interface FilterRecipesOptions {
  effects?: Record<string, number>;
  includeTags?: string[];
  excludeTags?: string[];
}

export function filterRecipes(
  recipes: CollectionEntry<"recipes">[],
  options: FilterRecipesOptions,
): CollectionEntry<"recipes">[] {
  return recipes.filter((recipe) => filterRecipe(recipe, options));
}

function filterRecipe(
  recipe: CollectionEntry<"recipes">,
  options: FilterRecipesOptions,
): boolean {
  if (options.effects) {
    for (const [effectId, tier] of Object.entries(options.effects)) {
      if (!includesEffect(recipe.data.effects, effectId, tier)) {
        return false;
      }
    }
  }
  return filterTags(recipe, options.includeTags, options.excludeTags);
}

function filterTags(
  recipe: CollectionEntry<"recipes">,
  includeTags?: string[],
  excludeTags?: string[],
): boolean {
  if (includeTags) {
    for (const tag of includeTags) {
      if (!recipe.data.tags.includes(tag)) {
        return false;
      }
    }
  }
  if (excludeTags) {
    for (const tag of excludeTags) {
      if (recipe.data.tags.includes(tag)) {
        return false;
      }
    }
  }
  return true;
}
