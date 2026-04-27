import styles from "../styles/App.module.css"

export function Title({children}){
  return(
    <h1 className={styles.titleWrapper}>{children}</h1>
  )
}