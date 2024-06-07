import { CategoryType } from "../models/MenuItem";
import { filterCategory } from "./category-filter";
import { getMenuItems, setMenuItems } from "./storage";

export function favourite(id: number, category: CategoryType = "all") {
  let menuItems = getMenuItems();
  let menuItem = menuItems.find((menuItem) => menuItem.id === id);

  if (menuItem) menuItem.wishlist = !menuItem.wishlist;

  setMenuItems(menuItems);

  filterCategory(category);
}
