import { base } from "astro:config/client";

export function effectHref(effectId: string) {
  return `${base}/effects/${effectId.toLowerCase()}`;
}
