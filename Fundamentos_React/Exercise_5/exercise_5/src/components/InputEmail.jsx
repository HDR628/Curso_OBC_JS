
export function InputEmail({label,email,setEmail}){
  return(
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        value={email}
        onChange={(ev) => setEmail(ev.target.value)} />
      </div>
  )
}