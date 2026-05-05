import { FormComment } from "./components/FormComment"
import { AddComment } from "./hooks/AddComment"

function App() {
  
  const {arrComment,addComments} = AddComment()
  // console.log(arrComment) Está retornando undefined 

  return (
    <div className='container'>
      <div className='sessionComents'>
        <h1>Seção de Comentarios</h1>
        <FormComment addComments={addComments}/>
        <div className="allComents">
          {arrComment.length > 0 ? 
          arrComment.map((comment) =>(
            <div key={comment.id}>
              <p>{comment.email}</p>
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

