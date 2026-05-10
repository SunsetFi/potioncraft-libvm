import { getCollection, type CollectionEntry } from "astro:content";

export async function resolveTag(
  id: string,
): Promise<CollectionEntry<"tags"> | null> {
  const tags = await resolveTags();

  const tag = tags.find((i) => i.id === id);
  return tag ?? null;
}

let tagCache: Promise<CollectionEntry<"tags">[]> | undefined;
export async function resolveTags() {
  if (!tagCache) {
    tagCache = getCollection("tags");
  }
  const tags = await tagCache;
  return tags;
}
