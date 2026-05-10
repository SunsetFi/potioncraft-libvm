import { resolveIngredient } from "./resolve-ingredient";

const ingredientIconModules = import.meta.glob<{ default: ImageMetadata }>(
  "./_/*/icon.png",
);

export async function resolveIngredientIcon(id: string) {
  const ingredient = await resolveIngredient(id);
  if (ingredient?.data.icon) {
    return ingredient.data.icon;
  }

  const mod = findIngredientIconModule(id);
  if (!mod) {
    console.warn(`No icon found for ingredient ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}

// Could cache these lookups.
const idFromIconPathRegex = /^\.\/_\/([^/]+)\/icon.png?$/;
function findIngredientIconModule(id: string) {
  for (const [key, value] of Object.entries(ingredientIconModules)) {
    const [, iconId] = idFromIconPathRegex.exec(key) || [];
    if (iconId.toLowerCase() === id.toLowerCase()) {
      return value;
    }
  }
  return null;
}
