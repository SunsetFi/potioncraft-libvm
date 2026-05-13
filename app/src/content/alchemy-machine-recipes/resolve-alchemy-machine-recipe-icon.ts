import { resolveAlchemyMachineRecipe } from "./resolve-alchemy-machine-recipe";
import type { AlchemyMachineRecipeId } from "./types/AlchemyMachineRecipeId";

const reagentIconModules = import.meta.glob<{ default: ImageMetadata }>(
  "./_/*/icon.png",
);

export async function resolveAlchemyMachineRecipeIcon(
  id: AlchemyMachineRecipeId,
) {
  const effect = await resolveAlchemyMachineRecipe(id);
  if (effect?.data.icon) {
    return effect.data.icon;
  }

  const mod = findReagentIconModule(id);
  if (!mod) {
    console.warn(`No icon found for reagent ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}

// Could cache these lookups.
const idFromIconPathRegex = /^\.\/_\/([^/]+)\/icon.png?$/;
function findReagentIconModule(id: AlchemyMachineRecipeId) {
  for (const [key, value] of Object.entries(reagentIconModules)) {
    const [, iconId] = idFromIconPathRegex.exec(key) || [];
    if (iconId.toLowerCase() === id.toLowerCase()) {
      return value;
    }
  }
  return null;
}
