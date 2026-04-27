import styles from "./button.module.css"

export function Button(props){
  return(
    <div className={styles.btnContainer}>
      {props.children}
    </div>
  )
}