import { useEffect, useState } from "react";
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"

  setTimeout(function(){
    console.log("setTimeout de FORA")
    //setCarregando(false)
  }, 3000)

function App() {

  const [contador, setContador] = useState(0)

  const [carregando, setCarregando] = useState(true)

  useEffect( () => {
    // Ao carregar o setTimeout na constante timeout, ele já roda o setTimeout 1 vez, como se tivesse apenas cahamdo setTimeout() sem atribuir a const alguma.
    const timeout = setTimeout(function(){
    console.log("setTimeout de DENTRO")
    setCarregando(false)
  }, 3000)

  return () => {
    // Esse return acontece na FASE 3, quando o componente é REMOVIDO DA TELA.
    // Uma função que é executada quando o componente sao da tela.
    clearTimeout(timeout)
  }

  }, [] )
  // Array vazia - o código é executado APENAS no primeiro rendering (fase 1)

  useEffect( () => {
    console.log("carregando ALTERADO!")
  }, [carregando] )

  
  useEffect( () => {
    console.log("useEffect sem NENHUMA dependência")
  } ) //sempre executado (sem nenhum dependência)

  useEffect( () => {
    console.log("contador ALTERADO!")
  }, [contador] )

  useEffect( () => {
    console.log("contador ou carregando ALTERADO!")
  }, [contador, carregando] )




/*   Ciclo de vida do componente (fases):
  1 - Montado na Tela
  2 - Renderizado novamente
  3 - Removido da Tela
*/
  return (
    <>
      {carregando? (<p>Carregando...</p>) : (
        <>
          <h1>Site Carregado com sucesso!</h1>
          <p>Todo conteúdo do site.</p>
          {contador < 10? (
            <Button texto="incrementar" onClique={() => setContador(contador + 1)}/>
          ): (<p>Buttom REMOVIDO</p>)}
          
          <p>Contador: {contador}</p>
        </>
        )}
    </>
  )
}

export default App

