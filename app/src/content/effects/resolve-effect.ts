import { getCollection, type CollectionEntry } from "astro:content";
import { getEffectIdFromSlug } from "./collection";

let effectCache: Promise<CollectionEntry<"effects">[]> | undefined;

export async function resolveEffect(
  id: string,
): Promise<CollectionEntry<"effects"> | null> {
  if (!effectCache) {
    effectCache = getCollection("effects");
  }
  const effects = await effectCache;

  id = id.toLowerCase();

  const effect = effects.find(
    (effect) => getEffectIdFromSlug(effect.id).toLowerCase() === id,
  );
  return effect ?? null;
}

export async function resolveEffects() {
  if (!effectCache) {
    effectCache = getCollection("effects");
  }
  return await effectCache;
}
