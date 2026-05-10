export function includesTag(tags: string[], tag: string) {
  tag = tag.toLowerCase();
  return tags.map((t) => t.toLowerCase()).includes(tag);
}
