import { useState } from "react"


function App() {
  /* Declarações de useState */
  const [email,setEmail] = useState('')
  const [comment,setComment] = useState('')

  const [arrComment,setArrComments] = useState([])

    
  /* Funções  */

  function addComments({email,comment}){
    const id = Math.floor(Math.random() * 123)
    const data = new Date().toLocaleString()  
    const newComment = {id,email,data,comment}

    setArrComments((actualState) => {
      return [newComment, ...actualState]
    })
  }

  function handleSubmit(ev){
    ev.preventDefault()
    addComments({email,comment})
    setEmail('')
    setComment('')
  }


  return (
    <div className='container'>
      <div className='sessionComents'>
        <h1>Seção de Comentarios</h1>
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
        <div className="allComents">
          {arrComment.length > 0 ? 
          arrComment.map((comment) =>(
            <div key={comment.id}>
              <p>{comment.email}</p>
              {/* <p>{new Date.toLocaleString()}</p> */}
              <span>{comment.data}</span>
              <p>{comment.comment}</p>
            </div>
          ))  : (
          <h1>Seja o primeiro a comentar!</h1>
        ) }
          
        </div>
      </div>
      
    </div>    
  )
}

export default App

