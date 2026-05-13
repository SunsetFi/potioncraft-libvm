import { getCollection } from "astro:content";
import type { EffectId } from "./types/EffectId";
import type { EffectEntry } from "./types/EffectEntry";

export async function resolveEffect(id: EffectId): Promise<EffectEntry | null> {
  const effects = await resolveEffects();

  const lowerId = id.toLowerCase();

  const effect = effects.find((effect) => effect.id.toLowerCase() === lowerId);
  return effect ?? null;
}

let effectCache: Promise<EffectEntry[]> | undefined;
export async function resolveEffects() {
  if (!effectCache) {
    effectCache = getCollection("effects");
  }
  return await effectCache;
}
