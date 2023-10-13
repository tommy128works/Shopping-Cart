import { React, useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../App.jsx";

import "../styles/ProductGallery.scss";
import starIcon from "../assets/icons/star_rating_icon.svg";
import halfStarIcon from "../assets/icons/half_star_rating_icon.svg";
import shoppingCartIcon from "../assets/icons/shopping_cart_icon.svg";

const createStars = (ratingRate) => {
  let integer = Math.floor(ratingRate);
  let decimal = ratingRate - integer;
  let starsList = [];

  for (let i = 0; i < integer; i++) {
    starsList.push(<img src={starIcon} key={i} />);
  }

  if (decimal > 0.75) {
    starsList.push(<img src={starIcon} key={integer + 1} />);
  } else if (decimal > 0.25) {
    starsList.push(<img src={halfStarIcon} key={integer + 1} />);
  }

  return starsList;
};

const Product = ({ title, imageURL, price, ratingRate, ratingCount, addToCart }) => {
  return (
    <div className="product">
      <img src={imageURL} />
      <div className="title">{title}</div>
      <div className="rating-container">
        {createStars(ratingRate)} {ratingCount}
      </div>
      <div className="price">${price.toFixed(2)}</div>

      <button className="add-to-cart-button" onClick={() => addToCart(title, price.toFixed(2))} >
        <img src={shoppingCartIcon} /> Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ratingRate: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const ProductGallery = ({ productData }) => {
  const { cartItems, addToCart } = useContext(ShopContext);


  return (
    <div className="product-gallery">
      {productData.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            imageURL={product.image}
            price={product.price}
            ratingRate={product.rating.rate}
            ratingCount={product.rating.count}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};

ProductGallery.propTypes = {
  productData: PropTypes.array.isRequired,
};

export default ProductGallery;
