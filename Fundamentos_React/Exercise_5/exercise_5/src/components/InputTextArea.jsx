
export function InputTextArea({label,comment,setComment}){
  return(
    <div>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        value={comment}
        onChange={(ev) => setComment(ev.target.value)} />
      </div>
  )
}