import { base } from "astro:config/client";

export function getEffectHref(effectId: string) {
  return `${base}/effects/${effectId.toLowerCase()}`;
}
