import "./App.css"; // need to change to scss file
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <HomePage name={"string"} />
    </>
  );
}

export default App;
