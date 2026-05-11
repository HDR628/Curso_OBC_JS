import { createBrowserRouter } from "react-router-dom"
import AdminHome from "./components/Admin"
import Home from "./components/Home"
import Products from "./components/Products"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/admin",
    element: <AdminHome/>
  }
])


export default router