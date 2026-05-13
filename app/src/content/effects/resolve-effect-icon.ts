import { resolveEffect } from "./resolve-effect";
import type { EffectId } from "./types/EffectId";

const effectIconModules = import.meta.glob<{ default: ImageMetadata }>(
  "./_/*/icon.png",
);

export async function resolveEffectIcon(id: EffectId) {
  const effect = await resolveEffect(id);
  if (effect?.data.icon) {
    return effect.data.icon;
  }

  const mod = findEffectIconModule(id);
  if (!mod) {
    console.warn(`No icon found for effect ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}

// Could cache these lookups.
const idFromIconPathRegex = /^\.\/_\/([^/]+)\/icon.png?$/;
function findEffectIconModule(id: EffectId) {
  for (const [key, value] of Object.entries(effectIconModules)) {
    const [, iconId] = idFromIconPathRegex.exec(key) || [];
    if (iconId.toLowerCase() === id.toLowerCase()) {
      return value;
    }
  }
  return null;
}
