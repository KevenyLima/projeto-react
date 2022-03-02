import { Link } from "react-router-dom"
import styles from "./styles/button.module.css"
function Button({ to, text }) {
    return (
        <Link className={styles.button} to={to} >{text}</Link>
    )
}

export default Button