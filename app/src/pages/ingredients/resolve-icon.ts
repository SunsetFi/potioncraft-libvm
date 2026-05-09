const iconModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/content/ingredients/*/icon.png",
);

export async function resolveIcon(id: string) {
  const key = `/src/content/ingredients/${id}/icon.png`;
  const mod = iconModules[key];
  if (!mod) return null;
  return (await mod()).default;
}
