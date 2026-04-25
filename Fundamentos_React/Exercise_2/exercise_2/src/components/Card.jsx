import { FilmTitle } from "./FilmTitle";
import { Description } from "./Description";
import styles from "../styles/App.module.css";

export function Card() {
  return (
    <div className={styles.card}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
        alt="Capa do filme Star Wars"
        // style={styles.poster} da erro 
        className="styles.poster"
      />
        <div className={styles.content}>
          <FilmTitle />
          <Description />
          <button className={styles.buyBtn}>Comprar Agora</button>
        </div>
    </div>        
  );
}
