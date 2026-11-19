import { useEffect, useRef, useState } from "react";
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"

function App() {
  let contador = useRef(0)

  const [contadorState, setContadorState] = useState(0)

  //console.log(contador)
  //console.log(contador.current)

  useEffect(() => {
    console.log("Ciclo de vida do componente alterado")
  })

  function btnClicadoRef(){
    contador.current = contador.current + 1
    console.log("clicado!", contador.current, "vezes")
  }

    function btnClicadoState(){
    setContadorState(contadorState + 1)
    console.log("clicado!", contadorState, "vezes")
  }
 
  return (
    <>
      <Button texto="incrementar sem render (useRef)" onClique={btnClicadoRef} />
      <Button texto="incrementar com render (useState)" onClique={btnClicadoState} />
    </>
  )
}

export default App

