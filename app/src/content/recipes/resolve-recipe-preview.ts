import { resolveRecipe } from "./resolve-recipe";
import type { RecipeId } from "./types/RecipeId";

const ingredientIconModules = import.meta.glob<{ default: ImageMetadata }>("./_/*/preview.png");

export async function resolveRecipePreview(id: RecipeId) {
  const recipe = await resolveRecipe(id);
  if (recipe?.data.preview) {
    return recipe.data.preview;
  }

  const mod = findRecipePreviewModule(id);
  if (!mod) {
    console.warn(`No icon found for ingredient ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}

// Could cache these lookups.
const idFromIconPathRegex = /^\.\/_\/([^/]+)\/preview.png?$/;
function findRecipePreviewModule(id: RecipeId) {
  const idLower = id.toLowerCase();
  for (const [key, value] of Object.entries(ingredientIconModules)) {
    const [, iconId] = idFromIconPathRegex.exec(key) || [];
    if (iconId.toLowerCase() === idLower) {
      return value;
    }
  }
  return null;
}
