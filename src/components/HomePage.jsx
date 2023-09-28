import PropTypes from "prop-types";
import React from "react";

import "../styles/HomePage.scss";

const HomePage = ({ name }) => {
  return (
    <div id="home-page">
      <div className="main-text">
        <h1>Fake Store!</h1>
        <p>
          This is a fake store with fake products. <br />
          Purchase items and view your Shopping Cart!
        </p>
        <p>Enjoy!</p>

        <div className="buttons-container">
          <button>GitHub</button>
          <button>API Link</button>
        </div>
      </div>

      {/* Need to dynamically generate the category links */}

      <div className="quick-navigation">
        <h3>Quick Navigation</h3>
        <button>Electronics</button>
        <button>Jewelery</button>
        <button>Men's Clothing</button>
        <button>Women's Clothing</button>
      </div>

      {/* {name} */}
    </div>
  );
};

HomePage.propTypes = {
  name: PropTypes.string,
};

export default HomePage;
