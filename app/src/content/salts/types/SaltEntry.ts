import type { CollectionEntry } from "astro:content";
import type { Merge } from "type-fest";
import type { SaltId } from "./SaltId";

export type SaltEntry = Merge<
  CollectionEntry<"salts">,
  {
    id: SaltId;
  }
>;
