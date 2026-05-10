import { resolveEffect } from "./resolve-effect";

const effectIconModules = import.meta.glob<{ default: ImageMetadata }>(
  "./*/icon.png",
);

export async function resolveEffectIcon(id: string) {
  const effect = await resolveEffect(id);
  if (effect?.data.icon) {
    return effect.data.icon;
  }

  const key = `./${id}/icon.png`;
  const mod = effectIconModules[key];
  if (!mod) {
    console.warn(`No icon found for effect ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}
