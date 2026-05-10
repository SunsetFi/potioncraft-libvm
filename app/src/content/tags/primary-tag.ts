const primaryIngredientTags = ["alchelander", "wastelander", "highlander", "lowlander"] as const;

export function getPrimaryIngredientTag(tags: string[]): string | null {
  const primaryTag = primaryIngredientTags.find((tag) => tags.includes(tag));
  return primaryTag ?? null;
}

const primarySaltTags = ["scholarly", "lunar", "solar", "gyroscopic", "dull"] as const;
export function getPrimarySaltTag(tags: string[]): string | null {
  const primaryTag = primarySaltTags.find((tag) => tags.includes(tag));
  return primaryTag ?? null;
}
