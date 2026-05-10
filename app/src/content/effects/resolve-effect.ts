import { getCollection, type CollectionEntry } from "astro:content";

let effectCache: Promise<CollectionEntry<"effects">[]> | undefined;

export async function resolveEffect(
  id: string,
): Promise<CollectionEntry<"effects"> | null> {
  if (!effectCache) {
    effectCache = getCollection("effects");
  }
  const effects = await effectCache;

  const effect = effects.find((i) => i.id === id);
  return effect ?? null;
}

export async function resolveEffects() {
  if (!effectCache) {
    effectCache = getCollection("effects");
  }
  return await effectCache;
}
