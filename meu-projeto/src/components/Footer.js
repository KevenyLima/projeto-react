import {FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"
import styles from "./styles/Footer.module.css"
function Footer(){
    return (
            <ul className={styles.footer}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
            </ul>
    )
}
export default Footer