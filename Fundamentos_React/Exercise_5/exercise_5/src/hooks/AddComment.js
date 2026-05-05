import { useState } from "react"

export function AddComment(){
    const [arrComment,setArrComments] = useState([])
      
    
    function addComments({email,comment}){
      const id = Math.floor(Math.random() * 123)
      const data = new Date().toLocaleString()  
      const newComment = {id,email,data,comment}
  
      setArrComments((actualState) => {
        return [newComment, ...actualState]
      })
    }
  
  return{arrComment,addComments}
}