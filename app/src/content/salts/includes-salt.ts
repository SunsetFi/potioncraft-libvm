import { recordEntries } from "../../utils/record-entries";
import type { SaltCountRecord } from "./types/SaltCountRecord";
import type { SaltId } from "./types/SaltId";

export function includesSalt(salts: SaltCountRecord, saltId: SaltId): boolean {
  const lowerId = saltId.toLowerCase();

  for (const [key, value] of recordEntries(salts)) {
    if (value <= 0) {
      continue;
    }

    if (key.toLowerCase() === lowerId) {
      return true;
    }
  }
  return false;
}
