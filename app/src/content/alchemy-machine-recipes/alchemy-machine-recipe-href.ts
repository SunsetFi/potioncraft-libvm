import { base } from "astro:config/client";
import type { AlchemyMachineRecipeId } from "./types/AlchemyMachineRecipeId";

export function getAlchemyMachineRecipeHref(reagentId: AlchemyMachineRecipeId) {
  return `${base}/alchemy-machine-recipes/${reagentId.toLowerCase()}`;
}
