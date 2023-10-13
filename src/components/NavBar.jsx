import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { React, useRef, useContext } from "react";
import { ShopContext } from "../App.jsx";

import "../styles/NavBar.scss";
import menuIcon from "../assets/icons/menu_icon.svg";
import homeIcon from "../assets/icons/home_icon.svg";
import shoppingCartIcon from "../assets/icons/shopping_cart_icon.svg";

const NavBar = () => {
  const sideNavRef = useRef(null);
  const shoppingCartRef = useRef(null);

  const openSideNav = () => {
    sideNavRef.current.style.width = "250px";
    sideNavRef.current.style.padding = "5px 10px";
  };

  const closeSideNav = () => {
    sideNavRef.current.style.width = "0";
    sideNavRef.current.style.padding = "0px";
  };

  const openShoppingCart = () => {
    shoppingCartRef.current.style.width = "250px";
    shoppingCartRef.current.style.padding = "5px 10px";
  };

  const closeShoppingCart = () => {
    shoppingCartRef.current.style.width = "0px";
    shoppingCartRef.current.style.padding = "0px";
  };

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);


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
        <div>
          <img src={shoppingCartIcon} onClick={() => openShoppingCart()} />
        </div>
      </div>
      <div id="side-nav" ref={sideNavRef}>
        <img src={menuIcon} onClick={() => closeSideNav()} />
        <Link to="/" onClick={() => closeSideNav()}>
          Home
        </Link>
        <Link to="/shop/electronics" onClick={() => closeSideNav()}>
          Electronics
        </Link>
        <Link to="/shop/jewelery" onClick={() => closeSideNav()}>
          Jewelery
        </Link>
        <Link to="/shop/men's clothing" onClick={() => closeSideNav()}>
          Men's Clothing
        </Link>
        <Link to="/shop/women's clothing" onClick={() => closeSideNav()}>
          Women's Clothing
        </Link>

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
      <div id="shopping-cart" ref={shoppingCartRef}>
        <img src={shoppingCartIcon} onClick={() => closeShoppingCart()} />
        hello this is the shopping cart
        { cartItems }
      </div>
    </>
  );
};

NavBar.propTypes = {};

export default NavBar;
