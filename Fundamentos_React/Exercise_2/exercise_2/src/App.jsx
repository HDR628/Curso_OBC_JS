import styles from "./styles/App.module.css";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div className={styles.App}>
      <Card />
    </div>
  );
}
