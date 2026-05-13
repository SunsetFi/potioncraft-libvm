import { base } from "astro:config/client";
import type { TagId } from "./types/TagId";

export function getTagHref(tagId: TagId) {
  return `${base}/tags/${tagId.toLowerCase()}`;
}
