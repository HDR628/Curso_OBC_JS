import { Link } from "react-router-dom";
// import { defaultItems } from "../database";
import { useContext } from "react";
import { StockContext } from "../hooks/ItemsContext";

export function Homepage() {
  const { items } = useContext(StockContext);

  let qtdItems = items.length; // Qtd de items diferentes

  let totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  let date = new Date();
  date.setDate(date.getDate() - 10);

  let recentItems = items.filter((item) => {
    const itemDate = new Date(item.createdAt);
    return itemDate >= date;
  });
  let recentItemsCount = recentItems.length;

  let lowStockItems = items.filter((item) => item.quantity < 10);

  let lowStockCount = lowStockItems.length;

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboardGlance">
        <div>
          <h3>Diversidade de items</h3>
          <h1>{qtdItems}</h1>
        </div>
        <div>
          <h3>Inventario Total</h3>
          <h1>{totalItems}</h1>
        </div>
        <div>
          <h3>Items Recentes</h3>
          <h1>{recentItemsCount}</h1>
        </div>
        <div>
          <h3>Items Acabando</h3>
          <h1>{lowStockCount}</h1>
        </div>
      </div>
      <div className="itemsContainer">
        <div className="recentItems">
          <h2>Items Recentes</h2>
          <h2>Ações</h2>
          <div className="recentItemsList">
            {recentItems.map((item) => (
              <div key={item.id} className="itemRow">
                <span>{item.name}</span>
                <Link to={`/item/${item.id}`}>
                  <button>Ver</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="lowStockItems">
          <h2>Itens Acabando</h2>
          <h2>Ações</h2>
          <div className="lowStockItemsList">
            {lowStockItems.map((item) => (
              <div key={item.id} className="itemRow">
                <span>
                  {item.name} ({item.quantity} un)
                </span>
                <Link to={`/item/${item.id}`}>
                  <button>Ver</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
