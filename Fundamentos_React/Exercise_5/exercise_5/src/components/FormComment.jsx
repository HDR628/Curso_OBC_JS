import { useState } from "react"

export function FormComment() {

  /* Declarações de useState */
  const [email,setEmail] = useState('')
  const [comment,setComment] = useState('')

  function handleSubmit(ev){
    ev.preventDefault()
    addComments({email,comment})
    setEmail('')
    setComment('')
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputEmail">Email:</label>
        <input
          type="text"
          id='inputEmail'
          value={email}
          onChange={(ev) => setEmail(ev.target.value)} />
      </div>
      <div>
        <label htmlFor="inputComments">Comentario:</label>
        <textarea
          name="inputComments"
          id="inputComments"
          value={comment}
          onChange={(ev) => setComment(ev.target.value)}></textarea>
      </div>
      <button>Enviar Comentario</button>
    </form>
  )
}

