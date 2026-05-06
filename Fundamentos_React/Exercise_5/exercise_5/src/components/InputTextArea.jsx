
export function InputTextArea({id,label,comment,setComment}){
  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={comment}
        onChange={(ev) => setComment(ev.target.value)} />
      </div>
  )
}