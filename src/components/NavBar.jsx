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
      <div>
        <img src={homeIcon} />
        <span>Fake Store</span>
      </div>
      <div>
        <img src={shoppingCartIcon} />
      </div>
    </div>
  );
};

export default NavBar;
