import { Link } from "react-router-dom"

export default function Header() {
  return(
    <header>
        <nav>
          <Link to="/home">Inicio</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
  )
}