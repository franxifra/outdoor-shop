import React from 'react'
import Item from '../Item/Item'



const ItemList = ({productos}) => {
  return productos.map((data) => {
    return (
      <Item data={data} />
    )
  })
}
export default ItemList