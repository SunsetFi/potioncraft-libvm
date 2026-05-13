export function recordKeys<T extends Record<string, any>>(
  record: T,
): (keyof T)[] {
  return Object.keys(record) as (keyof T)[];
}
