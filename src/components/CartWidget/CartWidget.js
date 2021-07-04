import React from "react"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <div className="shopping-cart">
 <Link to="/cart"> <FaShoppingCart /></Link>
  </div>)
  
}

export default Navbar
