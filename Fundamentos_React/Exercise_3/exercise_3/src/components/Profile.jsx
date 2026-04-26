import styles from "../styles/App.module.css"

export function Profile({avatar,name,bio,email,phone,githubUrl}){
  return (
    <div className={styles.profile}>
      <img src={avatar} alt={"Imagem de Perfil do usuário " + name} />
      <h1>{name}</h1>
      <hr />
      <p>{bio}</p>
      <hr />  
      <p>{phone}</p>
      <hr />  
      <p>{email}</p>
      <div className={styles.btnContainer}>
        <button className={styles.btn} ><a href={githubUrl}>Github</a></button> 
        <button className={styles.btn} >Linkedin</button>
        <button className={styles.btn} >Twitter</button>
      </div>
    </div>  
  )
}