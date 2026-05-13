import type { CollectionEntry } from "astro:content";
import type { Tagged } from "type-fest";

export type EffectId = Tagged<CollectionEntry<"effects">["id"], "EffectId">;
