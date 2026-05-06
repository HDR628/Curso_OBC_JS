
export function InputEmail({id,label,email,setEmail}){
  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={email}
        onChange={(ev) => setEmail(ev.target.value)} />
      </div>
  )
}