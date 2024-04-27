import { MenuItem } from "../models/MenuItem";
import { deserialize } from "@tsed/json-mapper";

const menutItemList: MenuItem[] = [
  {
    id: 1,
    name: "Beer",
    imageUrl: "assets/beer.svg",
    price: 9.99,
    category: "drinks",
    wishlist: false,
    rating: 0,
  },
  {
    id: 2,
    name: "Birthday Cake",
    imageUrl: "assets/birthday-cake.svg",
    price: 79.99,
    category: "desserts",
    wishlist: false,
    rating: 0,
  },
  {
    id: 3,
    name: "Burger",
    imageUrl: "assets/burger.svg",
    price: 49.99,
    category: "main",
    wishlist: false,
    rating: 0,
  },
  {
    id: 4,
    name: "Cake",
    imageUrl: "assets/cake.svg",
    price: 20.99,
    category: "desserts",
    wishlist: false,
    rating: 0,
  },
  {
    id: 5,
    name: "Chicken",
    imageUrl: "assets/chicken.svg",
    price: 15.99,
    category: "main",
    wishlist: false,
    rating: 0,
  },
  {
    id: 6,
    name: "Chinese",
    imageUrl: "assets/chinese.svg",
    price: 19.99,
    category: "main",
    wishlist: false,
    rating: 0,
  },
  {
    id: 7,
    name: "Coffee",
    imageUrl: "assets/coffee.svg",
    price: 4.99,
    category: "drinks",
    wishlist: false,
    rating: 0,
  },
  {
    id: 8,
    name: "Lollipop",
    imageUrl: "assets/lollipop.svg",
    price: 2.99,
    category: "desserts",
    wishlist: false,
    rating: 0,
  },
  {
    id: 9,
    name: "Pie",
    imageUrl: "assets/pie.svg",
    price: 8.99,
    category: "main",
    wishlist: false,
    rating: 0,
  },
  {
    id: 10,
    name: "Smoothie",
    imageUrl: "assets/smoothie.svg",
    price: 9.99,
    category: "desserts",
    wishlist: false,
    rating: 0,
  },
  {
    id: 11,
    name: "Steak",
    imageUrl: "assets/steak.svg",
    price: 99.99,
    category: "main",
    wishlist: false,
    rating: 0,
  },
  {
    id: 12,
    name: "Coconut Water",
    imageUrl: "assets/coconut-water.svg",
    price: 2.99,
    category: "drinks",
    wishlist: false,
    rating: 0,
  },
];

export function initializeStorage() {
  let menutItems = sessionStorage.getItem("menuItems");
  if (!menutItems)
    sessionStorage.setItem("menuItems", JSON.stringify(menutItemList));
}

export function getMenuItems() {
  let menuItems: MenuItem[] = [];
  const menuItemsStorage = sessionStorage.getItem("menuItems");

  if (menuItemsStorage) {
    menuItems = deserialize(JSON.parse(menuItemsStorage), { type: MenuItem });
  }
  return menuItems;
}

export function setMenuItems(menuItems: MenuItem[]) {
  sessionStorage.setItem("menuItems", JSON.stringify(menuItems));
}
