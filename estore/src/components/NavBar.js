import React, { Component } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact to="/products?page=1&limit=10">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/new">New Product</NavLink>
        </li>
        <li>
          <NavLink to="/offers">Offers</NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
