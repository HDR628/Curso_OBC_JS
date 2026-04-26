import { Profile } from "./components/Profile"
import styles from "./styles/App.module.css"

export default function App() {
  return (
    <div className={styles.profileContainer}>
      <Profile
        avatar={"/max.jpg"}
        name="Linus Torvalds"
        bio="Desenvolvedor Web"
        email="[EMAIL_ADDRESS]"
        phone="(11) 98765-4321"
        githubUrl="https://github.com/torvalds"
      />
      <Profile
        avatar={"/max.jpg"}
        name="Linus Torvalds"
        bio="Desenvolvedor Web"
        email="[EMAIL_ADDRESS]"
        phone="(11) 98765-4321"
        githubUrl="https://github.com/torvalds"
      />
    </div>
  )
}
