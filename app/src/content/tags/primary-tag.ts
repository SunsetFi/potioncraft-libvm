import type { ItemTags } from "./types/ItemTags";
import type { TagId } from "./types/TagId";

const primaryIngredientTags = ["alchelander", "wastelander", "highlander", "lowlander"] as TagId[];

export function getPrimaryIngredientTag(tags: ItemTags): TagId | null {
  const primaryTag = primaryIngredientTags.find((tag) => tags.includes(tag));
  return primaryTag ?? null;
}

const primarySaltTags = ["scholarly", "lunar", "solar", "gyroscopic", "dull"] as TagId[];
export function getPrimarySaltTag(tags: string[]): TagId | null {
  const primaryTag = primarySaltTags.find((tag) => tags.includes(tag));
  return primaryTag ?? null;
}
