import React from 'react'
import { Image } from 'cloudinary-react'

// css
import './Item.css'

//components
import ItemCount from '../ItemCount/ItemCount'
import AddToCart from '../AddToCart/AddToCart'


const Item = ({data}) => {
    return (
      
        <div className="item-container">
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