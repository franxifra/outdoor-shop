import React from "react";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();

  if (!cart.length) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div>
        {cart.map((item) => (
          <h1 key={item.id}>
            {item.quantity} - {item.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Cart;
