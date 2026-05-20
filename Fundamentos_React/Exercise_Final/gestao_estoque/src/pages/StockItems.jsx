import { Link } from "react-router-dom";
import { defaultItems as products } from "../database"; /* Nomeamos como defaultItems no db.js */

export function StockItems() {
  return (
    <>
      <h1>Stock Items</h1>

      {/* Abas de navegação (Sub-menu) */}
      <div className="tabs">
        <Link to="/StockItems" className="tab active">
          Todos os itens
        </Link>
        <Link to="/NewItem" className="tab">
          Novo Item
        </Link>
      </div>

      <section className="productsTableSection">
        <table className="productsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="product-id">{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity} unid.</td>
                <td>{product.category}</td>
                <td className="actions-cell">
                  <Link to={`/item/${product.id}`}>
                    <button className="btn-view">Ver</button>
                  </Link>
                  <Link to={`/editItem/${product.id}`}>
                    <button className="btn-update">Atualizar</button>
                  </Link>
                  <button className="btn-delete">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
