import React from "react";
import { Image } from "cloudinary-react";

// css
import "./ItemDetail.css";

// components
import ItemCount from "../ItemCount/ItemCount";
import AddToCart from "../AddToCart/AddToCart";
import Loading from "../Loading/Loading";

const ItemDetail = ({ data }) => {
  return (
    <div className="product-container">
      {!data.name ? (
       <Loading/>
      ) : (
        <React.Fragment>
          <div className="image-detail">
            <Image
              cloudName="xifra-estudio-digital"
              publicId={data.imagen}
              crop="scale"
            />
          </div>
          <div className="item-detail">
            <h3 className="title">{data.name}</h3>
            <p className="price">$ {data.precio}</p>
            <p className="description">{data.descripcion}</p>
            <p className="stock">Stock Disponible: {data.stock}</p>
            <ItemCount stock={data.stock} />
            <AddToCart />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ItemDetail;
