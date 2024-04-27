import { getMenuItems } from "./storage";

export function displayWishlist() {
  const menuItems = getMenuItems();
  const wishlistItems = menuItems.filter((menuItem) => menuItem.wishlist);

  const menuItemsSection = document.getElementById("items");
  if (menuItemsSection) menuItemsSection.innerHTML = "";

  for (const wishlistItem of wishlistItems) {
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.classList.add("col");

    const menuItemCardDiv = document.createElement("div");
    menuItemCardDiv.id = wishlistItem.id.toString();
    menuItemCardDiv.classList.add("card");

    const menuItemImage = document.createElement("img");
    menuItemImage.src = wishlistItem.imageUrl;
    menuItemImage.height = 500;
    menuItemImage.width = 500;
    menuItemImage.classList.add("img-fluid");

    const menuItemBody = document.createElement("div");
    menuItemBody.classList.add("card-body");

    const menuItemName = document.createElement("h5");
    menuItemName.classList.add("card-title");
    menuItemName.textContent = wishlistItem.name;

    const menuItemPrice = document.createElement("p");
    menuItemPrice.classList.add("card-text");
    menuItemPrice.textContent = `$${wishlistItem.price}`;

    const addCartButton = document.createElement("button");
    addCartButton.classList.add("btn", "btn-primary", "btn-sm");
    addCartButton.textContent = "Add to Cart";
    addCartButton.addEventListener("click", () => {
      alert("Item added to cart");
    });

    mainMenuDiv.appendChild(menuItemCardDiv);
    menuItemCardDiv.appendChild(menuItemImage);
    menuItemCardDiv.appendChild(menuItemBody);
    menuItemBody.appendChild(menuItemName);
    menuItemBody.appendChild(menuItemPrice);
    menuItemBody.appendChild(addCartButton);
    menuItemsSection?.appendChild(mainMenuDiv);
  }
}
