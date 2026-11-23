import { useState } from "react";
import Modal from "./components/Modal/Modal";

export default function App() {
    
 const [modalAberto, setModalAberto] = useState(false); 



  return (
    <>  
        <h1>Exemplo de Modal</h1>
        <button onClick={() => {setModalAberto(true)}}>Abrir modal</button>
        <Modal isOpen={modalAberto}>
            <h2>Mensagem Importante</h2>
            <p>Leia atentamente</p>
            <button onClick={() => {setModalAberto(false)}}>Entendi</button>
        </Modal>
    </>
  )
}