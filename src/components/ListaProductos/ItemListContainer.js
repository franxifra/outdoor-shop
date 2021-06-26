import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'

import axios from 'axios'

const ListaProductos = () => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const productosResponse = async () => {
      try {
        const res = await axios(
          'https://run.mocky.io/v3/03189f29-aa38-4156-91e1-489bd64f6f93'
        )
        return setProductos(res.data.productos)
      } catch (error) {
        return setError(error)
      }
    }

    return productosResponse()
  }, [])

  return (
    <div className='lista-productos-container'>
      {error !== '' ? (
        <div>Error de conexion (controla tu conexion a internet) </div>
      ) : (
       
        <ItemList productos={productos} />
      )}
    </div>
  )
}

export default ListaProductos
