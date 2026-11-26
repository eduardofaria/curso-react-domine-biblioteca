import { useState } from "react"
import styles from "./Formtextarea.module.css"


export default function FormTextarea(){
    const [resposta, setResposta] = useState("")
    const [status, setStatus] = useState("aguardando")
    function handleSubmit(e){
        e.preventDefault()
        setStatus("enviando")
        setTimeout(() => {
            setStatus("sucesso")
            setResposta("") // apaga o texto digitado após envio
        }, 2000)
        
    }

    return (
        <>
            <form className={styles.container} onSubmit={handleSubmit}>
                <h2>Feedback do Curso</h2>
                <label htmlFor="feedback"></label>
                <textarea name="feedback" id="feedback" readOnly={status === "sucesso"} value={resposta} onChange={(e) => {setResposta(e.target.value)}}></textarea>
            <br/>

            {status !== "sucesso"? (
                <button disabled={resposta === "" || status === "enviando"}>
                    {status === "enviando"? "Aguarde..." : "Enviar"}
                </button>
            ) : null}
            

            {status === "enviando"? (<p>Estamos enviando sua mensagem...</p>) : null }
            {status === "sucesso"? (<p>Mensagem enviada com sucesso!</p>) : null }
            </form>

            
            <p>Resposta: {resposta}</p>
        </>
    )

}