export function AddGame(){
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
  
  return{addComments}
}