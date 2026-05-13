import { Homepage } from "./pages/Homepage"
import { StockItems } from "./pages/StockItems"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path:"/StockItems",
    element: <StockItems/>
  }
])

export default router