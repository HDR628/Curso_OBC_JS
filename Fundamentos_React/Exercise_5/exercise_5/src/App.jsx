import { useState } from "react"
import { FormComment } from "./components/FormComment"


function App() {
  
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




  return (
    <div className='container'>
      <div className='sessionComents'>
        <h1>Seção de Comentarios</h1>
        <FormComment/>
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

