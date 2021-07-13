import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// css
import "./ItemCount.css";

import { cartContext } from "../../context/CartContext";

const ItemCount = ({ stock, id, onAdd }) => {
  const { cart } = useContext(cartContext);
  const [cantidad, setCantidad] = useState(stock ? 1 : 0);
  const [productInCart, setProductInCart] = useState(false);

  const aumentar = () => cantidad > 0 && setCantidad(cantidad - 1);
  const disminuir = () => stock > cantidad && setCantidad(cantidad + 1);
  console.log(cantidad);
  console.log(cart);

  return (
    <React.Fragment>
      <label>Cantidad:</label>
      <div className="container-cantidad">
        <div className="disminuir" onClick={aumentar}>
          -
        </div>
        <div className="cantidad">{cantidad}</div>
        <div className="aumentar" onClick={disminuir}>
          +
        </div>
      </div>
      {!productInCart ? (
        <button
          onClick={() => {
            return onAdd(cantidad), setProductInCart(true);
          }}
        >
          Añadir al carrito
        </button>
      ) : (
        <Link to="/cart">
          <button>Terminar Compra</button>
        </Link>
      )}
    </React.Fragment>
  );
};

export default ItemCount;
