import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

//components
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <NavLink to="/" activeClassName="active">
          <img src={Logo} alt="logo Outdoor Shop" />
          <h1>Outdoor Shop</h1>
        </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/categorias/mochilas/" activeClassName="active">
              Mochilas
            </NavLink>
          </li>
          <li>
            <NavLink to="/categorias/carpas/" activeClassName="active">
              Carpas
            </NavLink>
          </li>
          <li>
            <NavLink to="/categorias/accesorios/" activeClassName="active">
              Accesorios
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
