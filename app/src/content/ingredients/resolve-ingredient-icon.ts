import { resolveIngredient } from "./resolve-ingredient";

const ingredientIconModules = import.meta.glob<{ default: ImageMetadata }>("./*/icon.png");

export async function resolveIngredientIcon(id: string) {
  id = id.toLowerCase();

  const ingredient = await resolveIngredient(id);
  if (ingredient?.data.icon) {
    return ingredient.data.icon;
  }

  const key = `./${id}/icon.png`;
  const mod = ingredientIconModules[key];
  if (!mod) {
    console.warn(`No icon found for ingredient ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}
