import './App.css'

function App() {
  const [title,setTitle] = useState("")
  const [img, setImg] = useState("")
  const [games,setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
    return JSON.parse(storedGames)
  })

  function handleSubmit(ev){
    ev.preventDefault()
    addGame({title,img})
    setTitle("")
    setImg("")
  }

  function addGame({title,img}){
    const id = Math.flor(Math.random() * 100)
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

  return (
    <>
    <div>
      <h1>Biblioteca de Jogos</h1>
      
      <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="title">Titulo</label>
        <input 
        type="text" 
        name='title' 
        id='title' 
        value={title}
        onChange={(ev) => setTitle(ev.target.value)} />
      </div>
      <div>
        <label htmlFor="img"></label>
        <input 
        type="text"
        value={img}
        onChange={(ev) => setImg(ev.target.value)} />
      </div>
      <button>Adicionar</button>
      </form>
      <div className='games'>
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.img} alt="Capa do Jogo" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
