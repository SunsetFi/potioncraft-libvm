import type { CollectionEntry } from "astro:content";
import type { Tagged } from "type-fest";

export type TagId = Tagged<CollectionEntry<"tags">["id"], "TagId">;
