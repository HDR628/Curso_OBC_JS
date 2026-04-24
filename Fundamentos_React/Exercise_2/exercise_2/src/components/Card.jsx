import { FilmTitle } from "./FilmTitle";
import { Description } from "./Description";

export function Card() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
        alt="Capa do filme Star Wars"
      />
      <div className="content">
        <FilmTitle />
        <Description />
        <button className="buyBtn">Comprar Agora</button>
      </div>
    </>
  );
}
