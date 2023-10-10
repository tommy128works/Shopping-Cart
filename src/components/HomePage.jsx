import PropTypes from "prop-types";
import React from "react";

import "../styles/HomePage.scss";

const HomePage = () => {
  return (
    <div id="home-page">
      <div className="main-text">
        <h1>Fake Store!</h1>
        <p>
          This is a fake store with fake products. Purchase items and view your
          shopping cart!
        </p>
        <p>Enjoy!</p>

        <div className="buttons-container">
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
      </div>

      <div className="quick-navigation">
        <h2>Quick Navigation</h2>
        <a>Electronics</a>
        <a>Jewelery</a>
        <a>Men's Clothing</a>
        <a>Women's Clothing</a>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
