import styles from "./styles/select.module.css"
function Select({ text, name, options, handleOnChande, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChande} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option._id} key={option._id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select