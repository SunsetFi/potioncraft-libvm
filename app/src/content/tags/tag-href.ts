import { base } from "astro:config/client";

export function getTagHref(tagId: string) {
  return `${base}/tags/${tagId.toLowerCase()}`;
}
