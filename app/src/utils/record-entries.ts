export function recordEntries<T extends Record<string, any>>(record: T): [keyof T, T[keyof T]][] {
  return Object.entries(record) as [keyof T, T[keyof T]][];
}
