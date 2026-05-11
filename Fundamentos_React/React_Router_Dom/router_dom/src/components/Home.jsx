import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section>
      <header>
        <nav>
          <Link to="/home">Inicio</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/carts">Cart</Link>
        </nav>
      </header>
      <h2>Página inicial!</h2>
      <p>Seja bem-vindo(a) à nossa loja.</p>
    </section>
  )
}