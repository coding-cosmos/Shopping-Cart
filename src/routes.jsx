import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ShopPage from "./pages/ShopPage/ShopPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  }
];

export default routes;
