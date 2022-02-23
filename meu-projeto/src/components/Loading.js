import styles from "./styles/loading.module.css"
import loading from "../img/Rolling.svg"
function Loading(){
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="loader"/>
        </div>
    )
}
export default Loading