import { Profile } from "./components/Profile"
import styles from "./styles/App.module.css"

export default function App() {
  return (
    <div className={styles.profileContainer}>
      <Profile
        avatar={<img src="" alt="" />}
        name=""
        bio=""
        email=""
        phone=""
        githubUrl=""
      />
    </div>
  )
}
