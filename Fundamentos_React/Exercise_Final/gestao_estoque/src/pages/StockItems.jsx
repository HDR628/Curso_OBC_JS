import { Link } from "react-router-dom";
import { defaultItems as products } from "../database"; /* Nomeamos como defaultItems no db.js */

export function StockItems(){
  return(
    <>
      <h2>Teste da page de items</h2>
      <p>Produtos em estoque</p>
      <section className="products">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>R$ {product.price}</p>
              <Link to={`/item/${product.id}`}>
                <button>Ver</button>
              </Link>
              <Link to={`/editItem/${product.id}`}>
                <button>Atualizar</button>
              </Link>
              <button>Excluir</button>
            </li>
          ))}
        </ul>
      </section>
    </>
    
  )
}