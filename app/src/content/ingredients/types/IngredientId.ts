import type { CollectionEntry } from "astro:content";
import type { Tagged } from "type-fest";

export type IngredientId = Tagged<CollectionEntry<"ingredients">["id"], "IngredientId">;
