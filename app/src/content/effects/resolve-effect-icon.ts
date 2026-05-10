import { resolveEffect } from "./resolve-effect";

const effectIconModules = import.meta.glob<{ default: ImageMetadata }>(
  "./_/*/icon.png",
);

export async function resolveEffectIcon(id: string) {
  const effect = await resolveEffect(id);
  if (effect?.data.icon) {
    return effect.data.icon;
  }

  const key = `./_/${capitalizeFirstLetter(id)}/icon.png`;
  const mod = effectIconModules[key];
  if (!mod) {
    console.warn(`No icon found for effect ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
