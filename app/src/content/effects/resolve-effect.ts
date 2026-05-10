import { getCollection, type CollectionEntry } from "astro:content";
import { getEffectIdFromSlug } from "./collection";

export async function resolveEffect(id: string): Promise<CollectionEntry<"effects"> | null> {
  const effects = await resolveEffects();

  id = id.toLowerCase();

  const effect = effects.find((effect) => getEffectIdFromSlug(effect.id).toLowerCase() === id);
  return effect ?? null;
}

let effectCache: Promise<CollectionEntry<"effects">[]> | undefined;
export async function resolveEffects() {
  if (!effectCache) {
    effectCache = getCollection("effects");
  }
  return await effectCache;
}
