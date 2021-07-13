import React, { createContext, useState, useContext } from "react";

export const cartContext = createContext();

export const useCartContext = () => useContext(cartContext);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      console.log("hay items");
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity};
        } else {
          return cartElement;
        }
      });
      setCart(newCart);
    } else {
      console.log("no hay items");
      console.log(cart)
      console.log(quantity)
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  return (
    <cartContext.Provider value={{ cart, setCart, clearCart, addToCart }}>
      {props.children}
    </cartContext.Provider>
  );
};
