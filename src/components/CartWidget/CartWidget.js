import React from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
      <div className="shopping-cart">
 <Link to="/cart"> <FaShoppingCart /></Link>
  </div>)
  
}

export default Navbar
