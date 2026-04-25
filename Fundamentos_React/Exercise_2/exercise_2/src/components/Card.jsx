import { FilmTitle } from "./FilmTitle";
import { Description } from "./Description";
import styles from "../styles/App.module.css";

/* Utilização de props pra reutilizar componentes com outros dados, seguindo um padrão 
Caso houver depedendencia de outro componente, como neste caso com filmtitle e description
Devemos passar as props para eles no componente que desejamos, no caso do filmTitle é o h1 (passamos a props dentro dele). 
*/
export function Card({title, description}) {
  return (
    <div className={styles.card}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
        alt="Capa do filme Star Wars"
        // style={styles.poster} da erro 
        className={styles.poster}/>
      <div className={styles.content}>
        <FilmTitle title={title}/>
        <Description description={description}/>
        <button className={styles.buyBtn}>Comprar Agora</button>
      </div>
    </div>        
  );
}
