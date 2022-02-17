import styles from "./styles/submitButton.module.css"
function SubmitButton({text}){


  return (
      <button className={styles.btn}>{text}</button>
  )
}

export default SubmitButton