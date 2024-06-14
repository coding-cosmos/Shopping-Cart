import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Cart from "./components/Cart/Cart";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"cart",
        element:<Cart/>
      }
    ]
  },
  {
    path: "shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"cart",
        element:<Cart/>
      }
    ]
  },
];

export default routes;
