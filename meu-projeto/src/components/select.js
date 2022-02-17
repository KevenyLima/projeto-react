import styles from "./styles/select.module.css"
function Select({text,name,options,handleOnChande,value}){
    return (
        <div className={styles.form_control}>
                <label htmlFor={name}>{text}:</label>
                <select name={name} id={name}>
                    <option disabled selected>Selecione uma opção</option>
                </select>
        </div>
    )
}

export default Select