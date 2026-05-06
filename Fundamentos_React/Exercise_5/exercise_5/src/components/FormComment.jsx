import { useState } from "react"
import { InputEmail } from "./inputEmail"
import { InputTextArea } from "./inputTextArea"

export function FormComment({ addComments }) {

  /* Declarações de useState */
  const [email,setEmail] = useState('')
  const [comment,setComment] = useState('')

  function handleSubmit(ev){
    ev.preventDefault()

    if(!email || !comment){
      return console.log("E necessario adicionar o email e comentario")
    }else{
      addComments({email,comment})
      setEmail('')
      setComment('')
    }    
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <InputEmail label="Email" email={email} setEmail={setEmail}/>
      <InputTextArea label="Comentario:" comment={comment} setComment={setComment} />
      <button>Enviar Comentario</button>
    </form>
  )
}

