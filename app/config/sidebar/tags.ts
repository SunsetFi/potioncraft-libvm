import { type SidebarItem } from "./sidebar-item";
import { getSidebarItemsFromContent } from "./sidebar-items-from-content";

export function getTagSidebarItems(): SidebarItem[] {
  return getSidebarItemsFromContent("tags");
}
