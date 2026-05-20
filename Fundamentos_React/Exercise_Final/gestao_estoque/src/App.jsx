import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { StockContextProvider } from "./hooks/ItemsContext";

function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  );
}

export default App;
