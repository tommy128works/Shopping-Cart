import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import "../styles/NavBar.scss";

import menuIcon from "../assets/icons/menu_icon.svg";
import homeIcon from "../assets/icons/home_icon.svg";
import shoppingCartIcon from "../assets/icons/shopping_cart_icon.svg";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <div>
        <img src={menuIcon} />
      </div>
      <Link to="/">
        <div>
          <img src={homeIcon} />
          <span>Fake Store</span>
        </div>
      </Link>
      <Link to="/shopping-cart-page">
        <div>
          <img src={shoppingCartIcon} />
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
