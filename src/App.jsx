import "./App.css"; // need to change to scss file
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import ShopPage from "./components/ShopPage.jsx";

function App() {
  return (
    <>
      <NavBar />
      <HomePage name={"string"} />
      <ShopPage />
    </>
  );
}

export default App;
