import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />
  },
	{
    path: "/products",
    element: <Products />,
  },
	{
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin",
    element: <Admin />,
  }
])

export default router;