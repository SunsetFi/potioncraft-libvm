export function includesEffect(effects: Record<string, number>, effectId: string): boolean {
  effectId = effectId.toLowerCase();

  for (const [key, value] of Object.entries(effects)) {
    if (value <= 0) {
      continue;
    }

    if (key.toLowerCase() === effectId) {
      return true;
    }
  }
  return false;
}
