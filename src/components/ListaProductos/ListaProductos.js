import React, { useEffect, useState } from "react";
import "./ListaProductos.css";
import ItemCount from "../ItemCount/ItemCount";
import AddToCart from "../AddToCart/AddToCart";
import { Image } from "cloudinary-react";

import placeholder from "../../assets/placeholder.png";
import axios from "axios";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const productosResponse = async () => {
      try {
        const res = await axios(
          "https://run.mocky.io/v3/03189f29-aa38-4156-91e1-489bd64f6f93"
        );
        return setProductos(res.data.productos);
      } catch (error) {
        return setError(error);
      }
    };

    return productosResponse();
  }, []);

  const productosData = productos.map((data) => {
    return (
      <div key={data.id} className="producto-container">
        {data.imagen ? (
          <Image
            cloudName="xifra-estudio-digital"
            publicId={data.imagen}
            width="300"
            crop="scale"
          />
        ) : (
          <img src={placeholder} alt="placeholder" width="300" />
        )}
        <h3>{data.name}</h3>
        <p>$ {data.precio}</p>
        <p>{data.descripcion}</p>
        <p>Stock Disponible: {data.stock}</p>
        <ItemCount stock={data.stock} />
        <AddToCart />
      </div>
    );
  });
  return (
    <div className="lista-productos-container">
      {error !== "" ? (
        <div>Error de conexion (controla tu conexion a internet) </div>
      ) : (
        productosData
      )}
    </div>
  );
};

export default ListaProductos;
