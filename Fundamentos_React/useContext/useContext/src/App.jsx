import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import UserContext from "./context/UserContext";


function App() {
  /* Criação do objeto "base" p/ compartilhar info */
  const user = {
    name: "Henrique",
    email: "email@email.com"
  }
  
  return (
    /* Necessario criação de um context/arquivo em JS, aqui se faz necessario usar o provider para compartilhar as info */
    <UserContext.Provider value={user}>
      <div className="app-border">
        <p>Dentro da div (App)</p>
        <Header/>
        <UserInfo/>
      </div>
      <h2>Usando contexto | useContext</h2>
    </UserContext.Provider> 
  )
}

export default App


/* Resumo ->
Criamos arquivo de contexto e declaramos/criamos atraves do createContext e exportamos para o arquivo pai(neste caso, o app.jsx)
Atribuimos no elemento/tag que queremos utilizar atraves do nomeArquivo.provider(assim e possivel acessar as info compartilhadas)
Nos elementos/componentes criados a parte utilizamos o hook useContext(parametro/arquivoContexto) do react(obtemos acesso atraves de uma variavel)


*/
