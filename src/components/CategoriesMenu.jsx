import { React } from "react";
import { Link } from "react-router-dom";

import "../styles/CategoriesMenu.scss";

const CategoriesMenu = () => {
  const temporaryProps = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div id="categories-menu">
      <h2>Categories</h2>
      {temporaryProps.map((category) => (
        <Link to={"/shop/" + category} key={category} >{category}</Link>
      ))}
    </div>
  );
};

CategoriesMenu.propTypes = {};

export default CategoriesMenu;
