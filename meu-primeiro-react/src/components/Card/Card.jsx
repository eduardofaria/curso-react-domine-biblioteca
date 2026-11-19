import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card ({titulo, descricao="descrição vazia"}){//Usado o Destruturado do javascript, no props (parâmetro padrão dos atributos do componente que vem como objeto)
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{titulo}</h2>
            <p>{descricao}</p>
            <Button />
        </div>
    )

}

export default Card;