import "./styles/styles.scss";
import * as bootstrap from "bootstrap";

import { initializeCategories } from "./scripts/categories";
import { initializeMenu } from "./scripts/menu-items";
import { getMenuItems, initializeStorage } from "./scripts/storage";
import { initializeWishlist } from "./scripts/wishlist";

initializeStorage();
initializeMenu(getMenuItems());
initializeCategories();
initializeWishlist();