import { type SidebarItem } from "./sidebar-item";
import { getSidebarItemsFromContent } from "./sidebar-items-from-content";

export function getEffectSidebarItems(): SidebarItem[] {
  return getSidebarItemsFromContent("effects");
}
