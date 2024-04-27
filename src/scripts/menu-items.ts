import { MenuItem } from "../models/MenuItem";
import { favourite } from "./favourite";
import { getMenuItems } from "./storage";

export function initializeMenu(menuItems: MenuItem[]) {
  const menuItemsSection = document.getElementById("items");
  if (menuItemsSection) menuItemsSection.innerHTML = "";

  for (const menuItem of menuItems) {
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.classList.add("col");

    const menuItemCardDiv = document.createElement("div");
    menuItemCardDiv.id = menuItem.id.toString();
    menuItemCardDiv.classList.add("card");

    const menuItemAnchor = document.createElement("a");
    menuItemAnchor.href = "#";
    menuItemAnchor.addEventListener("click", () => favourite(menuItem.id));

    const favouriteImage = document.createElement("img");
    favouriteImage.src = "assets/heart-filled.svg";
    favouriteImage.height = 50;
    favouriteImage.width = 50;
    favouriteImage.classList.add(menuItem.wishlist ? "none" : "grey-svg");

    const menuItemImage = document.createElement("img");
    menuItemImage.src = menuItem.imageUrl;
    menuItemImage.height = 500;
    menuItemImage.width = 500;
    menuItemImage.classList.add("img-fluid");

    const menuItemBody = document.createElement("div");
    menuItemBody.classList.add("card-body");

    const menuItemName = document.createElement("h5");
    menuItemName.classList.add("card-title");
    menuItemName.textContent = menuItem.name;

    const menuItemPrice = document.createElement("p");
    menuItemPrice.classList.add("card-text");
    menuItemPrice.textContent = `$${menuItem.price}`;

    const addCartButton = document.createElement("button");
    addCartButton.classList.add("btn", "btn-primary", "btn-sm");
    addCartButton.textContent = "Add to Cart";
    addCartButton.addEventListener("click", () => {
      alert("Item added to cart");
    });

    mainMenuDiv.appendChild(menuItemCardDiv);
    menuItemCardDiv.appendChild(menuItemAnchor);
    menuItemAnchor.appendChild(favouriteImage);
    menuItemCardDiv.appendChild(menuItemImage);
    menuItemCardDiv.appendChild(menuItemBody);
    menuItemBody.appendChild(menuItemName);
    menuItemBody.appendChild(menuItemPrice);
    menuItemBody.appendChild(addCartButton);
    menuItemsSection?.appendChild(mainMenuDiv);
  }
}
