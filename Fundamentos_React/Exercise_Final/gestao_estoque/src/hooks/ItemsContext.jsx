import { createContext, useState } from "react";
import { defaultItems } from "../database";

/* Criação do contexto */
export const StockContext = createContext();

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const stockItems = localStorage.getItem("react-stock-items");
    /* Fazer teste pra ver se aparece o db  */
    // if (!stockItems) return [];
    if (!stockItems) return defaultItems;
    return JSON.parse(stockItems);
  });

  function addItem(item) {
    const id = "item-" + Math.floor(Math.random() * 1000000);
    const newItem = {
      /* Utilização do spread operator para receber as propriedades do objeto, name,description... Dica da IA pra ficar mais limpo (Tinha pensando em fazer name: name 
      e assim por diante...) */
      ...item,
      id: id,
    };

    setItems((currentState) => {
      const newState = [...currentState, newItem];
      localStorage.setItem("react-stock-items", JSON.stringify(newState));
      return newState;
    });
  }

  return <StockContext.Provider value={{ items, addItem }}>{children}</StockContext.Provider>;
}
