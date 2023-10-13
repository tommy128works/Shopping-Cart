import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { React, useEffect, useState } from "react";

import "../styles/ShopPage.scss";
import CategoriesMenu from "./CategoriesMenu.jsx";
import ProductGallery from "./ProductGallery.jsx";

const getProductData = (category, validCategories) => {
  let URLParam = "category/";

  if (category === "all") {
    URLParam = "";
  } else if (validCategories.includes(category)) {
    URLParam = URLParam + category;
  }

  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + URLParam, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productData, error, loading };
};

getProductData.propTypes = {
  category: PropTypes.string,
  validCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ShopPage = () => {
  const { category } = useParams();

  const validCategories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const { productData, error, loading } = getProductData(
    category,
    validCategories,
  );

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div id="shop-page">
      <h1>Shop</h1>
      <div className="content-container">
        <CategoriesMenu validCategories={validCategories} />
        <ProductGallery productData={productData} />
      </div>
    </div>
  );
};

ShopPage.propTypes = {};

export default ShopPage;
