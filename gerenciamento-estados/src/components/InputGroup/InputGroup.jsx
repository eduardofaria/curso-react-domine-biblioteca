import styles from "./InputGroup.module.css"


export function InputGroup({unidade, label, valor = "0", tipo = "text", onValueChange}){

    return (
        <div className={styles.inputGroup}>
            <label>{label}:</label>
            <input type={tipo} value={valor} onChange={
            (e) => {
                onValueChange(e.target.value)
            }} />
            <span>{unidade}</span>
        </div>
    )

}