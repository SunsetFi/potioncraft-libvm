import type { CollectionEntry } from "astro:content";
import type { Tagged } from "type-fest";

export type AlchemyMachineRecipeId = Tagged<
  CollectionEntry<"alchemyMachineRecipes">["id"],
  "AlchemyMachineRecipeId"
>;
