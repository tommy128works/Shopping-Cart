import { React } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/CategoriesMenu.scss";

const CategoriesMenu = ({ validCategories }) => {
  return (
    <div id="categories-menu">
      <h2>Categories</h2>
      {validCategories.map((category) => {
        return (
          <Link to={"/shop/" + category} key={category}>
            {category}
          </Link>
        );
      })}
    </div>
  );
};

CategoriesMenu.propTypes = {
  validCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoriesMenu;
