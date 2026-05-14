import { Link } from "react-router-dom"


export function Header(){
  return( 
    <div className="header">
      <h2>React Stock</h2>
      <nav>
        {/* Não e necessario colocar o homepage, pq no Layout que criei coloque
        pra herdar o caminho raiz, no caso o "/" ai ele identifica como o "homepage"
        devido ao index true e componente/elemento  */}
        <Link to="/">
          <h3>Inicio | Rotas para o inicio</h3>
        </Link>
        <Link to="/StockItems">
          <h3>Items | Rota para os items</h3>
        </Link>
      </nav>
    </div>  
  )
}
