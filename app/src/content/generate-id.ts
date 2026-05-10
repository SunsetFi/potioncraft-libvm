export function generateIdPreserveCase({ entry }: { entry: string }) {
  return entry.replace(/\/index\.md$/, "").replace(/\.md$/, "");
}
