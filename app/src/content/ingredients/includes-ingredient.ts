import type { IngredientCountRecord } from "./types/IngredientCountRecord";
import type { IngredientId } from "./types/IngredientId";

export function includesIngredient(
  ingredients: IngredientCountRecord,
  ingredientId: IngredientId,
): boolean {
  const lowerId = ingredientId.toLowerCase();

  for (const [key, value] of Object.entries(ingredients)) {
    if (value <= 0) {
      continue;
    }

    if (key.toLowerCase() === lowerId) {
      return true;
    }
  }
  return false;
}
