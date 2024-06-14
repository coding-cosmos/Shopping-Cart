import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return <div className="container"
  ><RouterProvider router={router}/></div>;
}

export default App;
