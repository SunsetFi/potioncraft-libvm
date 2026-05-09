export interface SidebarItem {
  label: string;
  link: string;
}

export function compareSidebarItems(a: SidebarItem, b: SidebarItem): number {
  return a.label.localeCompare(b.label);
}
