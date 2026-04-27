import { Profile } from "./components/Profile"
import styles from "./styles/App.module.css"

export default function App() {
  return (
    <div className={styles.profileContainer}>
      <Profile
        avatar={"/max.jpg"}
        bio="Desenvolvedor Web"
        email="[EMAIL_ADDRESS]"
        phone="(11) 98765-4321"
        githubUrl="https://github.com/torvalds"
      >
        Linus Torvalds {/* Isso aqui vai ser entendido como o props.children/children, e vai ser renderizado no Title normalmente */}
      </Profile>
      <Profile
        avatar={"/max.jpg"}
        bio="Desenvolvedor Web"
        email="[EMAIL_ADDRESS]"
        phone="(11) 98765-4321"
        githubUrl="https://github.com/torvalds"
      >
        Here we go again!
      </Profile>
    </div>
  )
}
