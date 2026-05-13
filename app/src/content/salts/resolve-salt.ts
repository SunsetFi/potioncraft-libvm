import { getCollection } from "astro:content";
import type { SaltId } from "./types/SaltId";
import type { SaltEntry } from "./types/SaltEntry";

export async function resolveSalt(id: SaltId): Promise<SaltEntry | null> {
  const salts = await resolveSalts();

  const salt = salts.find((i) => i.id === id);
  return salt ?? null;
}

let saltCache: Promise<SaltEntry[]> | undefined;
export async function resolveSalts() {
  if (!saltCache) {
    saltCache = getCollection("salts");
  }
  const salts = await saltCache;
  return salts;
}
