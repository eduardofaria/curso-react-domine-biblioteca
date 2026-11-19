import styles from "./Button.module.css"

// Isto está errado - useEffect é o correto
//window.addEventListener("resize", () => {
//        console.log("resize")
//    })

//function Button(props) {
function Button({texto = "Botão Default", desabilitado = false, onClique}) {
    function btnClicado(){
    console.log("Clicado!", texto)

        if(onClique && typeof onClique === "function"){
            onClique()
        }
    }


    return (
        <>
        {/*<button className={styles.btn} disabled={desabilitado}>
        <span className={styles.title}>{props.texto}</span>*/}
        <button 
            className={`${styles.btn} ${desabilitado ? styles.desabilitado : ""}`} 
            disabled={desabilitado}
            onClick={() => { btnClicado() }}
        >
            {/* <span className={styles.title}>{texto} - {desabilitado} - {typeof desabilitado}</span> */}
            <span className={styles.title}>{texto}</span>
        </button>
        </>
    )
}

export default Button