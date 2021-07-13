import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";

//css
import "./AddToCart.css";

const AddToCart = ({ itemId, cantidad }) => {
  const { cart, addItem, updateCart } = useContext(cartContext);
  const itemInCart = cart && cart.find((item) => item.itemId === itemId);
  console.log("item en el carro", itemInCart);
  return (
    <React.Fragment>
      {itemInCart ? (
        itemInCart.cantidad !== cantidad ? (
          <div className="add-cart" onClick={() => {
            return updateCart(itemId, cantidad);
          }}>Actualizar carrito</div>
        ) : (
          <div className="add-cart">Finalizar compra</div>
        )
      ) : (
        <div
          className="add-cart"
          onClick={() => {
            console.log("caart", cart);
            return cantidad > 0 && addItem(itemId, cantidad);
          }}
        >
          Añadir al carrito
        </div>
      )}
    </React.Fragment>
  );
};

export default AddToCart;
