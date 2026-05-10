import { base } from "astro:config/client";

export function getSaltHref(id: string) {
  return `${base}/salts/${id}`;
}
