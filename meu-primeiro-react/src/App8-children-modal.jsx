import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Card from "./components/Card/Card";

export default function App() {
    
 const [modalAberto, setModalAberto] = useState(false);
 const [modalCardAberto, setModalCardAberto] = useState(false); 



  return (
    <>  
        <h1>Exemplo de Modal</h1>
        <button onClick={() => {setModalAberto(true)}}>Abrir modal</button>

        <Card titulo="Título do Card" descricao="Descrição do Card">
          <h4>Abrir modal de dentro do card</h4>
          <button onClick={() => {setModalCardAberto(true)}}>Abrir de dentro</button>
        </Card>

        <Modal isOpen={modalAberto}>
            <h2>Mensagem Importante 111111</h2>
            <p>Leia atentamente</p>
            <button onClick={() => {setModalAberto(false)}}>Fechar 111</button>
        </Modal>


        <Modal isOpen={modalCardAberto}>
            <h2>Mensagem Importante 222222</h2>
            <p>Leia atentamente</p>
            <button onClick={() => {setModalCardAberto(false)}}>Fechar 222222</button>
        </Modal>
    </>
  )
}