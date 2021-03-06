import React, { useEffect, useState } from "react";
import axios from "axios";

// css
import "./ItemListContainer.css";

// API base URL
import MockyIo from "../../api/MockyIo";

// components
import ItemList from "../ItemList/ItemList.js";
import Error from "../Error/Error";

const ItemListContainer = ({ match }) => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  const categoria = match && match.params.nombre;
  console.log(categoria);

  useEffect(() => {
    const productosResponse = async () => {
      try {
        const res = await axios(MockyIo);
        return setProductos(res.data.productos);
      } catch (error) {
        return setError(error);
      }
    };

    return productosResponse();
  }, []);

  return (
    <div className="lista-productos-container">
      {error !== "" ? (
        <Error />
      ) : (
        <ItemList productos={productos} categoria={categoria} />
      )}
    </div>
  );
};

export default ItemListContainer;
