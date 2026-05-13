import type { CollectionEntry } from "astro:content";
import type { Tagged } from "type-fest";

export type SaltId = Tagged<CollectionEntry<"salts">["id"], "SaltId">;
