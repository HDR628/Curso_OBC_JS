import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path: "home",
      element: <Home />
    },
    {
      path: "products",
      element: <Products/>
    },
    {
      path: "products/:productId",
      element: <Product/>
    },
    {
      path: "cart",
      element: <Cart/>
    }
  ]},
  {
    path: "/admin",
    element: <Admin />,
  }
])

export default router;