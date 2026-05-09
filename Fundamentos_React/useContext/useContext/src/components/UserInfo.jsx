import { useContext } from "react"
import UserContext from "../context/UserContext"


/* Criação do UserInfo, variavel que obtem/tem os dados do contexto/arquivo que declaramos/criamos...Assim podemos acessar(neste caso)
o user.name e user.email */
const UserInfo = () => {
  const user = useContext(UserContext)

  return(
    <div className="user-info-border">
      <h2>Info do Usuario</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserInfo