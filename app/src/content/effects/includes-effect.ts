import type { EffectId } from "./types/EffectId";
import type { EffectTierRecord } from "./types/EffectTierRecord";

export function includesEffect(
  effects: EffectTierRecord,
  effectId: EffectId,
  tier?: number,
): boolean {
  const lowerId = effectId.toLowerCase();

  for (const [key, value] of Object.entries(effects)) {
    if (value <= 0 || (tier !== undefined && value < tier)) {
      continue;
    }

    if (key.toLowerCase() === lowerId) {
      return true;
    }
  }
  return false;
}
