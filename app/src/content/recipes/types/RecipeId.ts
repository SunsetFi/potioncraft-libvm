import type { CollectionEntry } from "astro:content";
import type { Tagged } from "type-fest";

export type RecipeId = Tagged<CollectionEntry<"recipes">["id"], "RecipeId">;
