import styles from "./Modal.module.css"
function Modal({isOpen, children}){
    if(!isOpen) return null
    
    return(
        <div className={styles.modalOvelay}>
            <div className={styles.modalBody}>
                <h3>Meu modal</h3>
                {children}
            </div>
        </div>

    )
}

export default Modal