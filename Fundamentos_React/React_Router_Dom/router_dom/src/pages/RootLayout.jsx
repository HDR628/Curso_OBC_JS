import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout(){
  return(
    <>
      <Header/>
      <main>
        <h4>Conteudo Principal</h4>
        <p>Abaixo está o conteudo da rota</p>
        <hr />
        <Outlet/>
      </main>
      <footer>
        Rodape Simples
      </footer>
    </> 
  )
}