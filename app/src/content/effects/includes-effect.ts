export function includesEffect(
  effects: Record<string, number>,
  effectId: string,
  tier?: number,
): boolean {
  effectId = effectId.toLowerCase();

  for (const [key, value] of Object.entries(effects)) {
    if (value <= 0 || (tier !== undefined && value < tier)) {
      continue;
    }

    if (key.toLowerCase() === effectId) {
      return true;
    }
  }
  return false;
}
