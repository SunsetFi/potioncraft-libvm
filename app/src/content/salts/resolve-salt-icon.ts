import { resolveSalt } from "./resolve-salt";

const saltIconModules = import.meta.glob<{ default: ImageMetadata }>("./_/*/icon.png");

export async function resolveSaltIcon(id: string) {
  const salt = await resolveSalt(id);
  if (salt?.data.icon) {
    return salt.data.icon;
  }

  const mod = findSaltIconModule(id);
  if (!mod) {
    console.warn(`No icon found for ingredient ${id}`);
    return null;
  }

  const { default: icon } = await mod();
  return icon;
}

// Could cache these lookups.
const idFromIconPathRegex = /^\.\/_\/([^/]+)\/icon.png?$/;
function findSaltIconModule(id: string) {
  for (const [key, value] of Object.entries(saltIconModules)) {
    const [, iconId] = idFromIconPathRegex.exec(key) || [];
    if (iconId.toLowerCase() === id.toLowerCase()) {
      return value;
    }
  }
  return null;
}
