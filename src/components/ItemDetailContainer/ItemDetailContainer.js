import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail/ItemDetail";
import MockyIo from "../../api/MockyIo";

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
      <ItemDetail data={selectedItem} />
    </div>
  );
};

export default ItemDetailContainer;
