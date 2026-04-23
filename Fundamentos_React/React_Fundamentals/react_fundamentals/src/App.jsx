import "./App.css";

function sum(a, b) {
  return a + b;
}

export default function App() {
  /* Utilização de dados dinamicos, so passar o nome da variavel no elemento/parte que tu deseja, no caso React is cool. Tambem recebe outros tipos de expressões. Não e possivel utilizar expressões como if/else ou while...No entanto podemos usar o ternary operator*/
  const text = "React";
  const status = true;

  return (
    <div className="App">
      <h1>{text} is cool</h1>
      <h2>Just chilling, result of 1 plus 1 = {1 + 1}</h2>
      <h2>Just chilling, result of 1 plus 1 = {sum(1, 1)}</h2>
      <h4>Status: {status ? "On" : "Off"}</h4>
    </div>
  );
}
