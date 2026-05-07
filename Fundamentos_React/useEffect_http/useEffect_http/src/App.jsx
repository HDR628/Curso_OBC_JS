import { useEffect, useState } from "react"

async function fetchPokemon(){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()
  return data
}

export default function App(){
  const [pokemon,setPokemon] = useState([])
  

  /* Caso nao utilizamos o useEffect o fetch/require ia ficar renderizando/solicitando novamente infitamente... */
  useEffect(() =>
    fetchPokemon().then(results => {
      console.log("Realizando requisição")
      console.log(results)
      setPokemon(results)
    })
  ,[])

  return(
    <>
      <h1>Opa</h1>
      <ul className="pokemon">
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>     
    </>
  )
}