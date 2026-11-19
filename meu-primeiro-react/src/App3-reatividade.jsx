import { useState } from "react";
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"

function App() {
  // let contador = 0;
  function incrementar(){
    // contador++
    // console.log("contador: ", contador)
    //ganchoState[1](ganchoState[0] + 1)
    setContador(contador + 1)

  }

  function decrementar() {
    if (contador > 0) {
      //IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // setContador - 1 // Não funciona pois setContador não é um valor, é uma FUNÇÂO que altera contador.
      
      setContador(contador - 1)
      }

  }

  const [contador, setContador] = useState(0)
  /**
   * É o mesmo que:
   * const contador = ganchoState[0]
   * const setContador = ganchoState[1]
   */
  // Destructuring de Array [] / Destructuring de Objeto {}

  //const ganchoState = useState(0) // Retorna array com 2 valores
  //console.log(ganchoState)
  
  return (
    
    <>
      {/* <Button texto="Incrementar" onClique={incrementar} /> */}
      <Button texto="Incrementar" onClique={() => setContador(contador + 1)} />
      {/* <Button texto="Decrementar" desabilitado={(contador <= 0)? true : false} onClique={decrementar} /> */}
      <Button texto="Decrementar" desabilitado={contador <= 0} onClique={decrementar} />
    <p>Contador: {contador}</p>

    <Card titulo={"Contador: " + contador}></Card>

    </>
  )
}

export default App

