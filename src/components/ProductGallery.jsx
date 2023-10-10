import { React } from "react";
import PropTypes from "prop-types";

import "../styles/ProductGallery.scss";

const Product = (title, imageURL, price, ratingRate, ratingCount ) => {

    return (
        <div className="product" >

        </div>
    )
}

Product.propTypes = {

};




const ProductGallery = ( {productData} ) => {

    return (
        <div className="product-gallery" >
            hello productgallery
        </div>
    )
}

ProductGallery.propTypes = {
    productData: PropTypes.array.isRequired,
};

export default ProductGallery;