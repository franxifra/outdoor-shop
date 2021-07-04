import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemList = ({ productos, categoria }) => {
  const productosFiltrados = categoria ? productos.filter(producto => producto.categoria === categoria) : productos
  return (
    <React.Fragment>
      {productosFiltrados.length < 1 ? (
        <Loading />
      ) : (
        productosFiltrados.map((data) => {
          return (
            <Link
              to={`/item/${data.id}`}
              key={data.id}
              className="producto-container"
            >
              <Item data={data} />
            </Link>
          );
        })
      )}
    </React.Fragment>
  );
};
export default ItemList;
