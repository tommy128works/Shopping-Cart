import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { React, useRef } from "react";
import "../styles/NavBar.scss";

import menuIcon from "../assets/icons/menu_icon.svg";
import homeIcon from "../assets/icons/home_icon.svg";
import shoppingCartIcon from "../assets/icons/shopping_cart_icon.svg";

const NavBar = () => {
  const sideNavRef = useRef(null);

  const openSideNav = () => {
    sideNavRef.current.style.width = "250px";
    sideNavRef.current.style.padding = "5px 10px";
  };

  const closeSideNav = () => {
    sideNavRef.current.style.width = "0";
    sideNavRef.current.style.padding = "0px";
  };

  return (
    <>
      <div id="nav-bar">
        <div>
          <img src={menuIcon} onClick={() => openSideNav()} />
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
      <div id="side-nav" ref={sideNavRef}>
        <img src={menuIcon} onClick={() => closeSideNav()} />
        {/* This needs to be Links from React Router */}
        <a>Home Page</a>
        <a href="">Electronics</a>
        <a href="">Jewelry</a>
        <a href="">Men's Clothing</a>
        <a href="">Women's Clothing</a>
        <a
          target="_blank"
          href="https://github.com/tommy128works/Shopping-Cart"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a target="_blank" href="https://fakestoreapi.com/" rel="noreferrer">
          API Link
        </a>
      </div>
    </>
  );
};

NavBar.propTypes = {};

export default NavBar;
