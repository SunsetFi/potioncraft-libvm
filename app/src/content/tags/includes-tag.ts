import type { ItemTags } from "./types/ItemTags";
import type { TagId } from "./types/TagId";

export function includesTag(tags: ItemTags, tag: TagId) {
  const lowerTag = tag.toLowerCase();
  return tags.some((t) => t.toLowerCase() === lowerTag);
}
