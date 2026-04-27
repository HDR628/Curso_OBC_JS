

export function ProfileSection(props){
  return (
    <div className="">
      <p>{props.bio}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      {props.children}
    </div>
  )
}