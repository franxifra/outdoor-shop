import React from 'react'
import { Image } from 'cloudinary-react'

// css
import './Item.css'

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
      </div>
   
    )
}

export default Item