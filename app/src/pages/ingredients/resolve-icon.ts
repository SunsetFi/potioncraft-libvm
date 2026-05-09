const iconModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/ingredients/*/icon.png",
);

export async function resolveIcon(id: string) {
  const key = `/src/ingredients/${id}/icon.png`;
  const mod = iconModules[key];
  if (!mod) return null;
  return (await mod()).default;
}
