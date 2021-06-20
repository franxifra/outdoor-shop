import React, { useEffect, useState } from "react";
import "./Greetings.css";
import ItemCount from "../components/ItemCount/ItemCount";
import AddToCart from "../components/AddToCart/AddToCart";
import { Image } from "cloudinary-react";
import placeholder from "../assets/placeholder.png"
import axios from "axios";

const Greetings = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosResponse = async () => {
      const res = await axios(
        "https://run.mocky.io/v3/4616268e-4afb-4726-bccf-4a337f0cda2c"
      );
      return setProductos(res.data.productos);
    };

    return productosResponse();
  }, []);

  const productosData = productos.map((data) => {
    return (
      <div key={data.id} className="ProductoContainer">
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
      </div>
    );
  });
  return <div className="ListaProductosContainer">{productosData}</div>;
};

export default Greetings;
