import { React, useContext } from "react";
import { ShopContext } from "../App.jsx";
import PropTypes from "prop-types";

import "../styles/ShoppingCart.scss";
import addIcon from "../assets/icons/add_icon.svg";
import subtractIcon from "../assets/icons/subtract_icon.svg";
import trashIcon from "../assets/icons/trash_icon.svg";

const calculateTotal = (cartItems) => {
  let total = 0;

  cartItems.map((item) => {
    total += item.price;
  })
  
  return total.toFixed(2);
}

calculateTotal.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const CartItem = ({
  title,
  price,
  count,
  imageURL,
  addToCart,
  subtractFromCart,
  deleteFromCart,
}) => {
  return (
    <div className="cart-item">
        <div className="img-container" ><img src={imageURL}/></div>
        <div className="item-details">
            <div className="first-row">
                <div>{title}</div>
                <img src={trashIcon} />
            </div>
            <div className="second-row">
                <div>${price.toFixed(2)}</div>
                <div className="item-quantity-container">
                    <img src={subtractIcon} />
                    <div>{count}</div>
                    <img src={addIcon} />
                </div>
            </div>

        </div>
    </div>
  );
};

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  // addToCart: PropTypes.func.isRequired,
};

const ShoppingCart = () => {
  const { cartItems, addToCart, subtractFromCart, deleteFromCart } =
    useContext(ShopContext);
  return (
    <div id="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        {cartItems.map((item) => {
        return (
          <CartItem
            key={item.title}
            title={item.title}
            price={item.price}
            count={item.count}
            imageURL={item.imageURL}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
            deleteFromCart={deleteFromCart}
          />
        );
      })}
      </div>
      <div className="check-out-container">
        <div>Subtotal: $ {calculateTotal(cartItems)}
          
        </div>
        <button>CHECKOUT</button>
        <div>This is the end of the demo</div>
      </div>
      
    </div>
  );
};

export default ShoppingCart;
