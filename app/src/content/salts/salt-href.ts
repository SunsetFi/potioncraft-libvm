import { base } from "astro:config/client";
import type { SaltId } from "./types/SaltId";

export function getSaltHref(id: SaltId) {
  return `${base}/salts/${id}`;
}
