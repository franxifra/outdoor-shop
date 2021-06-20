import React, { useEffect, useState } from "react";
import "./Greetings.css";
import ItemCount from "../components/ItemCount/ItemCount";
import AddToCart from "../components/AddToCart/AddToCart";
import { Image } from "cloudinary-react";

import placeholder from "../assets/placeholder.png"
import axios from "axios";

const Greetings = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    const productosResponse = async () => {
      try {
        const res = await axios(
        "https://run.mocky.io/v3/6373ab7b-59ce-4d0e-8b6f-c0d56995901d"
      );
      return setProductos(res.data.productos);
      } catch (error) {
        return (
          setError(error), 
          console.log(error)
        )
      }
      
    };

    return productosResponse();
  }, []);

  const productosData = productos.map((data) => {
    return (
      <div key={data.id} className="producto-container">
             

        {data.imagen ? <Image
          cloudName="xifra-estudio-digital"
          publicId={data.imagen}
          width="300"
          crop="scale"
        /> : <img src={placeholder} alt="placeholder" width="300"/>}
        <h3>{data.name}</h3>
        <p>$ {data.precio}</p>
        <p>{data.descripcion}</p>
        <p>Stock Disponible: {data.stock}</p>
        <ItemCount stock={data.stock} />
        <AddToCart />
      </div>)
  });
  return <div className="ListaProductosContainer">{error !== "" ? <div>Error de conexion (controla tu conexion a internet)</div> : ""} {productosData}</div>;
};

export default Greetings;
