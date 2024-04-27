import "./styles/styles.scss";
import * as bootstrap from "bootstrap";

import "./scripts/wishlist";
import { initializeCategories } from "./scripts/categories";
import { initializeMenu } from "./scripts/menu-items";
import { getMenuItems, initializeStorage } from "./scripts/storage";

initializeStorage();
initializeMenu(getMenuItems());
initializeCategories();
