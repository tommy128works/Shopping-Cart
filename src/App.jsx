import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

import "./App.scss";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (title, price) => {
    const itemIndex = cartItems.findIndex((product) => product.title === title);
    if (itemIndex > -1) {
      let tempCartItems = cartItems;
      tempCartItems[itemIndex].count++;
      setCartItems(tempCartItems);
    } else {
      let tempCartItems = cartItems;
      tempCartItems.push({ title: title, count: 1, price: price});
      setCartItems(tempCartItems);
    }

    console.log(cartItems);
  };

  const removeFromCart = () => {

  };

  return (
    <>
      <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        <NavBar />
        <Outlet />
        <Footer />
      </ShopContext.Provider>
    </>
  );
}

export default App;
