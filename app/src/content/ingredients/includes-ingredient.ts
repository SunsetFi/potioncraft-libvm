export function includesIngredient(
  ingredients: Record<string, number>,
  ingredientId: string,
): boolean {
  ingredientId = ingredientId.toLowerCase();

  for (const [key, value] of Object.entries(ingredients)) {
    if (value <= 0) {
      continue;
    }

    if (key.toLowerCase() === ingredientId) {
      return true;
    }
  }
  return false;
}
