import styles from "./styles/Header.module.css"
import logo from "../img/costs_logo.png"
import { Link } from "react-router-dom"
function Header(){
    return (
        <header className={styles.header}>
        <div className={styles.logo}><img src={logo}/></div>
        <ul className={styles.list} >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/empresa">Empresa</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
        </header>
    )
}
export default Header