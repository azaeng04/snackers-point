import { CategoryType } from "../models/MenuItem";
import { filterCategory } from "./category-filter";

export function initializeCategories() {
  const categoriesUl = document.getElementById("sidebar-list");
  if (categoriesUl) {
    const categories: [string, CategoryType][] = [
      ["All", "all"],
      ["Drinks", "drinks"],
      ["Mains", "main"],
      ["Desserts", "desserts"],
    ];
    for (const category of categories) {
      const categoryListItem = document.createElement("li");
      categoryListItem.classList.add("nav-item");

      const categoryLink = document.createElement("a");
      categoryLink.classList.add("nav-link");
      categoryLink.href = "#";
      categoryLink.textContent = category[0];
      categoryLink.addEventListener(
        "click",
        () => filterCategory(category[1])
      );

      categoryListItem.appendChild(categoryLink);
      categoriesUl.appendChild(categoryListItem);
    }
  }
}
