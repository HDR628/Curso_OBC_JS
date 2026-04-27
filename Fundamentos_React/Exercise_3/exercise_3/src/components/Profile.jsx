import styles from "../styles/App.module.css"
import { Button } from "./Button/Button"
import { ProfileSection } from "./ProfileSection/ProfileSection"
import { Title } from "./Title"

export function Profile({avatar, bio, email, phone, githubUrl, children}){
  return (
    <div className={styles.profile}>
      <img src={avatar} alt={"Imagem de Perfil"} />
      <Title>
        <p>Nome</p>
        {children}
        <button>Follow</button>
      </Title>
      <ProfileSection>
        <hr />
        {bio}
        <hr />
        {phone}
        <hr />
        {email}
      </ProfileSection>
      <Button>
        <button className={styles.btn} ><a href={githubUrl}>Github</a></button>
        <button className={styles.btn} >Linkedin</button>
        <button className={styles.btn} >Twitter</button>
      </Button>
    </div>  
  )
}