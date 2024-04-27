import { CategoryType } from "../models/MenuItem";
import { initializeMenu } from "./menu-items";
import { getMenuItems } from "./storage";

export function filterCategory(category: CategoryType) {
  const menuItems = getMenuItems();
  if (category === "all") {
    initializeMenu(menuItems);
    return;
  }
  const menuItemsSection = document.getElementById("items");
  if (menuItemsSection) {
    const filteredCategories = menuItems.filter(
      (menuItem) => menuItem.category === category
    );
    initializeMenu(filteredCategories);
  }
}
