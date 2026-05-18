import { createBrowserRouter } from "react-router-dom"
import { EditItem } from "./pages/EditItem"
import { Homepage } from "./pages/Homepage"
import { Item } from "./pages/Item"
import Layout from "./pages/Layout"
import { NewItem } from "./pages/NewItem"
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
    },
    {
      path: "item/:itemId",
      element: <Item/>
    },
    {
      path: "NewItem",
      element: <NewItem/>
    },
    {
      path: "editItem/:editId",
      element: <EditItem/>
    }
    ]
  }
])
// path: "products/:productId",

export default router