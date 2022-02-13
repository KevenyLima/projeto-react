import styles from "../components/styles/container.module.css"
function Container(props){
    return(
        <div className={`${styles.content} ${styles[props.customClass]}`}>{props.children}</div>
    )
}
export default Container