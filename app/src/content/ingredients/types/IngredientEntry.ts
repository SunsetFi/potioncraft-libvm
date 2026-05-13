import type { CollectionEntry } from "astro:content";
import type { Merge } from "type-fest";
import type { IngredientId } from "./IngredientId";

export type IngredientEntry = Merge<
  CollectionEntry<"ingredients">,
  {
    id: IngredientId;
  }
>;
