import { useContext } from "react"
import UserContext from "../context/UserContext"

/* Criação do componente header, declaração da variavel que vai obter/ter os dados do contexto...Chamamos o hook
predefinido do React o useContext passando como parametro o arquivo que criamos a parte */
const Header = () => {
  const user = useContext(UserContext)
  
  return(
    <header className="header-border">
      <h2>Aqui e o Header</h2>
      <h3>Bem vindo, {user.name}</h3>
      <hr />
    </header>
    
  )
}


export default Header;