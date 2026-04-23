import { Section } from "./components";

export default function App() {
  return (
    <div className="App">
      <img src="react.png" alt="Logo do React" />
      <Section title="React" text="A biblioteca para interfaces de usuarios web e nativas"></Section>
      {/* <h2 className="Titulos">React</h2>
      <p className="paragrafos">A biblioteca para interfaces de usuarios web e nativas</p> */}
      <button type="button">Aprenda React</button>
      <button type="button">Referencia da API</button>
      <hr />
      <Section
        title="Crie interfaces de usuarios de componentes"
        text="React permite que voce construa interfaces de usuarios a partir de pedaços individuais chamados de COMPONENTES"
      ></Section>
      {/* <h2 className="Titulos">Crie interfaces de usuarios de componentes</h2>
      <p className="paragrafos">
        React permite que voce construa interfaces de usuarios a partir de pedaços individuais chamados de COMPONENTES
      </p> */}
      <hr />
      <h2 className="Titulos">Escreva componentes com codigo e marcação </h2>
      <p className="paragrafos">
        Componentes react sao funçoes JS. A sintaxe e chamada de JSX. E uma extensão da sintaxe de JS popularizada pelo
        React
      </p>
      <hr />
      <h2 className="Titulos">Proximos Passos</h2>
      <ul>
        <li>Uso de dados dinamicos JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JS</li>
      </ul>
    </div>
  );
}
