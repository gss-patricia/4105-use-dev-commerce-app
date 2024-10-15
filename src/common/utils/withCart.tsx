// hoc/WithCart.tsx
import React, { useState, useEffect } from "react";
import { Product } from "../types/product";
import { CartProps } from "../types/cart";
import { ICartStorage } from "../interfaces/cartStorage.interface";

function WithCart<P extends CartProps>(
  WrappedComponent: React.ComponentType<P>,
  cartStorage: ICartStorage // Injetar a dependência aqui
) {
  return function WithCartComponent(props: Omit<P, keyof CartProps>) {
    const [cartItems, setCartItems] = useState<Product[]>(() => {
      // Usar o cartStorage para carregar os itens
      return cartStorage.loadCartItems();
    });

    // Sincronizar o armazenamento sempre que cartItems mudar
    useEffect(() => {
      cartStorage.saveCartItems(cartItems);
    }, [cartItems, cartStorage]);

    const addToCart = (product: Product) => {
      const existingProduct = cartItems.find((item) => item.id === product.id);
      if (!existingProduct) {
        setCartItems((prevItems) => [...prevItems, product]);
      } else {
        alert("Este produto já está no carrinho!");
      }
    };

    const removeFromCart = (id: number) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartCount = cartItems.length;

    return (
      <WrappedComponent
        {...(props as P)}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartCount={cartCount}
      />
    );
  };
}

export default WithCart;
