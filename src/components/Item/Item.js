import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import AddToCart from '../AddToCart/AddToCart'
import { Image } from 'cloudinary-react'
import './Item.css'

const Item = ({data}) => {
    return (
        <div className='producto-container'>
        <Image
          cloudName='xifra-estudio-digital'
          publicId={data.imagen}
          width='300'
          crop='scale'
        />


        <h3>{data.name}</h3>
        <p>$ {data.precio}</p>
        <p>{data.descripcion}</p>
        <p>Stock Disponible: {data.stock}</p>
        <ItemCount stock={data.stock} />
        <AddToCart />
      </div>
    )
}

export default Item
