import { getCollection } from "astro:content";
import type { TagId } from "./types/TagId";
import type { TagEntry } from "./types/TagEntry";

export async function resolveTag(id: TagId): Promise<TagEntry | null> {
  const tags = await resolveTags();

  const tag = tags.find((i) => i.id === id);
  return tag ?? null;
}

let tagCache: Promise<TagEntry[]> | undefined;
export async function resolveTags() {
  if (!tagCache) {
    tagCache = getCollection("tags");
  }
  const tags = await tagCache;
  return tags;
}
