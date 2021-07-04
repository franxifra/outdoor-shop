import React, { useEffect, useState } from "react";
import axios from "axios";

// API base URL
import MockyIo from "../../api/MockyIo";

// components
import ItemDetail from "../ItemDetail/ItemDetail";
import Error from "../Error/Error";

const ItemDetailContainer = ({ match }) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [error, setError] = useState("");
  console.log(match.params.id);

  useEffect(() => {
    const detailResponse = async () => {
      try {
        const res = await axios(MockyIo);
        console.log(res.data.productos);
        console.log();

        return setSelectedItem(
          res.data.productos.find((item) => item.id == match.params.id)
        );
      } catch (error) {
        setError(error);
        return console.log(error);
      }
    };

    return detailResponse();
  }, []);

  return (
   
    <div>
       {error !== "" ? (
      <Error/>
    ) : (
      <ItemDetail data={selectedItem} />
    )}
    </div>
  );
};

export default ItemDetailContainer;
