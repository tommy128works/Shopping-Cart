import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "shop/:category", element: <ShopPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
