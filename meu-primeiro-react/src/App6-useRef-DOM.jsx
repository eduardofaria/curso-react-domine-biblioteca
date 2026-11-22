import { useEffect, useRef } from "react";
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"

function App() {
  const inputRef = useRef(null); // use null quando for usar elementos do DOM
  console.log(inputRef.current) // Nesse momento, antes do DOM carregar, o current é null
  useEffect(() => {inputRef.current.focus()}, []) // A forma de fazer o .focus funcionar, pois vai rodae após o componente ser carregado a primeira vez, não antes, pois o DOM já estará em tela.
  
  function btnClicado(){
    inputRef.current.focus() //Não é possível chamar .focus do inputRef com valor null, daria erro se fosse usado fora daqui
    //console.log(inputRef)
    console.log(inputRef.current)
  }
 
  return (
    <>
      <input type="text" ref={inputRef} /> { /* Depois que o DOM carrega, o current do inputRef passa a ser este input (ref=).*/}
      <button onClick={btnClicado}>foco no input</button>
    </>
  )
}

export default App

