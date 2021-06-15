import React from "react";
import { Menu } from 'semantic-ui-react'
import CartWidget from "./CartWidget.js"

const Navbar = () => {
  return (
    <nav className="mainNav">
    <Menu color="red">
        <Menu.Item>
          <a href=""><h2>Outdoor Shop</h2></a>
        </Menu.Item>

        <Menu.Item
          name='mochilas'
        >
          <a href="">Mochilas</a>
        </Menu.Item>

        <Menu.Item
          name='carpas'
        >
          <a href="">Carpas</a>
        </Menu.Item>

        <Menu.Item
          name='accesorios'
        >
          <a href="">Accesorios</a>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='cartWidget'
          >
            <CartWidget/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  );
};

export default Navbar;
