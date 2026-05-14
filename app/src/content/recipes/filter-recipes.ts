import { recordEntries } from "../../utils/record-entries";
import { includesEffect } from "../effects/includes-effect";
import type { EffectTierRecord } from "../effects/types/EffectTierRecord";
import { includesIngredient } from "../ingredients/includes-ingredient";
import type { IngredientId } from "../ingredients/types/IngredientId";
import type { SaltId } from "../salts/types/SaltId";
import type { TagId } from "../tags/types/TagId";
import type { RecipeEntry } from "./types/RecipeEntry";

export interface FilterRecipesOptions {
  effects?: EffectTierRecord;
  ingredients?: IngredientId[];
  salts?: SaltId[];
  includeTags?: TagId[];
  excludeTags?: TagId[];
}

export function filterRecipes(
  recipes: RecipeEntry[],
  options: FilterRecipesOptions,
): RecipeEntry[] {
  return recipes.filter((recipe) => filterRecipe(recipe, options));
}

function filterRecipe(recipe: RecipeEntry, options: FilterRecipesOptions): boolean {
  if (options.effects) {
    for (const [effectId, tier] of recordEntries(options.effects)) {
      if (!includesEffect(recipe.data.effects, effectId, tier)) {
        return false;
      }
    }
  }

  if (options.ingredients) {
    for (const ingredient of options.ingredients) {
      if (!includesIngredient(recipe.data.ingredients, ingredient)) {
        return false;
      }
    }
  }

  if (options.salts) {
    for (const salt of options.salts) {
      if (!Object.keys(recipe.data.salts).includes(salt)) {
        return false;
      }
    }
  }

  return filterTags(recipe, options.includeTags, options.excludeTags);
}

function filterTags(recipe: RecipeEntry, includeTags?: TagId[], excludeTags?: TagId[]): boolean {
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
