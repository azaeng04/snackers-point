import { Property, Required } from "@tsed/schema";

export type CategoryType =
  | "all"
  | "beverages"
  | "desserts"
  | "drinks"
  | "main"
  | "none";

export class MenuItem {
  @Property()
  @Required()
  id: number;

  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  imageUrl: string;

  @Property()
  price: number;

  @Property()
  rating: number = 0;

  @Property()
  category: CategoryType = "none";

  @Property()
  wishlist = false;

  constructor(id: number, name: string, imageUrl: string, price: number) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

export {};
