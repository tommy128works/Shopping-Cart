import { React } from "react";
import PropTypes from "prop-types";

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

const Product = ({ title, imageURL, price, ratingRate, ratingCount }) => {
  return (
    <div className="product">
      <img src={imageURL} />
      <div className="title">{title}</div>
      <div className="rating-container">
        {createStars(ratingRate)} {ratingCount}
      </div>
      <div className="price">${price.toFixed(2)}</div>

      <button className="add-to-cart-button">
        {" "}
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
};

const ProductGallery = ({ productData }) => {
  console.log(productData);

  return (
    <div className="product-gallery">
      {productData.map((product) => {
        return (
          <Product
            title={product.title}
            imageURL={product.image}
            price={product.price}
            ratingRate={product.rating.rate}
            ratingCount={product.rating.count}
            key={product.id}
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
