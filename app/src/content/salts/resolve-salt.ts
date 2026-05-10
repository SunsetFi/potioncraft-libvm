import { getCollection, type CollectionEntry } from "astro:content";

export async function resolveSalt(
  id: string,
): Promise<CollectionEntry<"salts"> | null> {
  const salts = await resolveSalts();

  const salt = salts.find((i) => i.id === id);
  return salt ?? null;
}

let saltCache: Promise<CollectionEntry<"salts">[]> | undefined;
export async function resolveSalts() {
  if (!saltCache) {
    saltCache = getCollection("salts");
  }
  const salts = await saltCache;
  return salts;
}
