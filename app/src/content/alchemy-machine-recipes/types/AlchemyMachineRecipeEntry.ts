import type { CollectionEntry } from "astro:content";
import type { Merge } from "type-fest";
import type { AlchemyMachineRecipeId } from "./AlchemyMachineRecipeId";
import type { EffectTierRecord } from "../../effects/types/EffectTierRecord";

export type AlchemyMachineRecipeEntry = Merge<
  CollectionEntry<"alchemyMachineRecipes">,
  {
    id: AlchemyMachineRecipeId;
    data: Merge<
      CollectionEntry<"alchemyMachineRecipes">["data"],
      {
        requiredPotions: EffectTierRecord[];
      }
    >;
  }
>;
