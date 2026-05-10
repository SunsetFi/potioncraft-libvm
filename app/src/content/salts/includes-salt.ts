export function includesSalt(salts: Record<string, number>, saltId: string): boolean {
  saltId = saltId.toLowerCase();

  for (const [key, value] of Object.entries(salts)) {
    if (value <= 0) {
      continue;
    }

    if (key.toLowerCase() === saltId) {
      return true;
    }
  }
  return false;
}
