import { Item } from "./Item.model";

export class Order {
  private id: number;
  private name: string;
  private quantity: number;
  private price: number;
  private item: Item;

  constructor(
    id: number,
    name: string,
    quantity: number,
    price: number,
    item: Item
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.item = item;
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getQuantity(): number {
    return this.quantity;
  }
  getPrice(): number {
    return this.price;
  }
  getItem(): Item {
    return this.item;
  }
  getTotal(): number {
    return this.price * this.quantity;
  }
}
