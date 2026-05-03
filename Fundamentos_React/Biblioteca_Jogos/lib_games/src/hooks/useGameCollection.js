import { useState } from "react"

export default function useGameCollection(){
  const [games,setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
    return JSON.parse(storedGames)
  })

  function addGame({title,img}){
    const id = Math.floor(Math.random() * 100)
    const game = {id,title,img}
    setGames(state => {
      const newState = [...state,game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  function removeGame(id){
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  return{games,addGame,removeGame}
}