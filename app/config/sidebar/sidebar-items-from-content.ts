import { resolve } from "node:path";
import { readdirSync, existsSync } from "node:fs";
import matter from "gray-matter";
import { compareSidebarItems, type SidebarItem } from "./sidebar-item";

export function getSidebarItemsFromContent(path: string): SidebarItem[] {
  const dir = resolve(`./src/content/${path}`);
  if (!existsSync(dir)) {
    return [];
  }

  let items: SidebarItem[] = [];

  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    let indexPath: string | null = null;

    if (file.isDirectory()) {
      indexPath = resolve(dir, file.name, "index.md");
    } else if (file.isFile() && file.name.endsWith(".md")) {
      indexPath = resolve(dir, file.name);
    }

    if (!indexPath || !existsSync(indexPath)) {
      continue;
    }

    const { data } = matter.read(indexPath);
    items.push({
      label: data.name ?? file.name,
      link: `/${path}/${file.isDirectory() ? file.name : file.name.replace(/\.md$/, "")}`,
    });
  }

  return items.toSorted(compareSidebarItems);
}
