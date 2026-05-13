import type { CollectionEntry } from "astro:content";
import type { Merge } from "type-fest";
import type { EffectId } from "./EffectId";

export type EffectEntry = Merge<
  CollectionEntry<"effects">,
  {
    id: EffectId;
  }
>;
