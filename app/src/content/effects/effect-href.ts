import { base } from "astro:config/client";
import type { EffectId } from "./types/EffectId";

export function getEffectHref(effectId: EffectId) {
  return `${base}/effects/${effectId.toLowerCase()}`;
}
