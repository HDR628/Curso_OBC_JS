import { useState } from "react"
import TextInput from "./TextInput"

export function NewGameForm({addGame}){
  
  const [title,setTitle] = useState("")
  const [img, setImg] = useState("")
  
  function handleSubmit(ev){
    ev.preventDefault()
    addGame({title,img})
    setTitle("")
    setImg("")
  }

  return(
      <form onSubmit={handleSubmit} >
        <TextInput id="title" label="Titulo" value={title} setValue={setTitle}/>
        <TextInput id="cover" label="Capa" value={img} setValue={setImg}/>
      <button>Adicionar a biblioteca</button>
      </form>
  )
}