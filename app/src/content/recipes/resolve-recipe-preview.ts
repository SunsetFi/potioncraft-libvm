import { resolveRecipe } from "./resolve-recipe";

const ingredientIconModules = import.meta.glob<{ default: ImageMetadata }>(
  "./_/*/preview.png",
);

export async function resolveRecipePreview(id: string) {
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
function findRecipePreviewModule(id: string) {
  for (const [key, value] of Object.entries(ingredientIconModules)) {
    const [, iconId] = idFromIconPathRegex.exec(key) || [];
    if (iconId.toLowerCase() === id.toLowerCase()) {
      return value;
    }
  }
  return null;
}
