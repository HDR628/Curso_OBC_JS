import { createContext, useState } from "react";
import { defaultItems } from "../database";

/* Criação do contexto */
export const StockContext = createContext();

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const stockItems = localStorage.getItem("item-");
    /* Fazer teste pra ver se aparece o db  */
    // if (!stockItems) return [];
    if (!stockItems) return defaultItems;
    return JSON.parse(stockItems);
  });
}

return (
  <>
    <h1>Teste</h1>
  </>
);
