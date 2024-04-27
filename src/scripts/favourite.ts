import { initializeMenu } from "./menu-items";
import { getMenuItems, initializeStorage, setMenuItems } from "./storage";

export function favourite(id: number) {
  let menuItems = getMenuItems();
  let menuItem = menuItems.find((menuItem) => menuItem.id === id);

  if (menuItem) menuItem.wishlist = !menuItem.wishlist;

  setMenuItems(menuItems);

  initializeMenu(getMenuItems());
}
