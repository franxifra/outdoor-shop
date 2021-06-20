import React from 'react';
import "./ItemCount.css"

const ItemCount = ({stock}) => {
    return (
        <p>
        <label>Cantidad: </label>
        <input type="number" max={stock} min="0"/>
        </p>
    )
}

export default ItemCount
