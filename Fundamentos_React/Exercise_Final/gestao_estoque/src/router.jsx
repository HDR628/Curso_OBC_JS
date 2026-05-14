import { createBrowserRouter } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import Layout from "./pages/Layout"
import { StockItems } from "./pages/StockItems"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      index: true,
      element: <Homepage/>
    },
    {
      path: "StockItems",
      element: <StockItems/>
    }
    ]
  }
])

export default router