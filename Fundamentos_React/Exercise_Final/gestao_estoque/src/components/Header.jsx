import { Link } from "react-router-dom"


export function Header(){
  return( 
    <div className="header">
      <h2>React Stock</h2>
      <nav>
        <Link to="/home">
          <h3>Inicio | Rotas para o inicio</h3>
        </Link>
        <Link to="/StockItems">
          <h3>Items | Rota para os items</h3>
        </Link>
      </nav>
    </div>  
  )
}
