import { Product } from "../types/product";

export interface ICartStorage {
  loadCartItems: () => Product[];
  saveCartItems: (items: Product[]) => void;
}
