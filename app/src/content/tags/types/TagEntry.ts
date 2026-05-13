import type { CollectionEntry } from "astro:content";
import type { TagId } from "./TagId";
import type { Merge } from "type-fest";

export type TagEntry = Merge<CollectionEntry<"tags">, { id: TagId }>;
