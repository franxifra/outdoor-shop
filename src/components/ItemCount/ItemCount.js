import React, {useState} from 'react';
import "./ItemCount.css";
import { Input } from "semantic-ui-react";



const ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState(0)
    return (
        <div className="container-cantidad">
        <label>Cantidad: </label>
        <Input type="number" value={cantidad} max={stock} min="0" onChange={event => setCantidad(event.target.value)}/>
        {cantidad > stock ? <p className="no-stock">No hay stock suficiente</p>: <p></p>}
        </div>
    )
}

export default ItemCount
