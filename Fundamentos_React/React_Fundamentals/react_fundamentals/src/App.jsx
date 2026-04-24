import TitleTwo from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import StatusText from "./components/StatusText";
import styles from "../App.module.css";

function sum(a, b) {
  return a + b;
}

function OtherComponentTitle() {
  const newText = "React components";
  return newText;
}

export default function App() {
  /* Utilização de dados dinamicos, so passar o nome da variavel no elemento/parte que tu deseja, no caso React is cool. Tambem recebe outros tipos de expressões. Não e possivel utilizar expressões como if/else ou while...No entanto podemos usar o ternary operator*/
  const text = "React";
  const status = true;

  return (
    <div className={styles.app}>
      <h1 style={{ color: "white" }}>{text} is cool</h1>
      <OtherComponentTitle /> {/* This will show React Components */}
      <h2>Just chilling, result of 1 plus 1 = {1 + 1}</h2>
      <TitleTwo />
      <h2>Just chilling, result of 1 plus 1 = {sum(1, 1)}</h2>
      <Subtitle />
      <h4>Status: {status ? "On" : "Off"}</h4>
      <StatusText />
    </div>
  );
}
