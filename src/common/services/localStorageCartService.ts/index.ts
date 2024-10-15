import { ICartStorage } from "../../interfaces/cartStorage.interface";
import { Product } from "../../types/product";

export const LocalStorageCartService = (): ICartStorage => {
  const STORAGE_KEY = "cartItems";

  return {
    loadCartItems: () => {
      const storedItems = localStorage.getItem(STORAGE_KEY);
      return storedItems ? JSON.parse(storedItems) : [];
    },
    saveCartItems: (items: Product[]) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    },
  };
};
