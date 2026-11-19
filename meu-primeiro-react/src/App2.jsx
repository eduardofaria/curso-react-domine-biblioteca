import Button from "./components/Button/Button"
import Card from "./components/Card/Card"

function App() {
  function buttonClicado(){
    console.log("buttonClicado!")
  }
  
  return (
    //<React.Fragment>
    // Qualquer código javascript em um arquivo .jsx DEVE estar entre {}
    //<Button texto="Botão 2" onClick={() => buttonClicado()}/> //onClick AQUI, NÃO é um ATRIBUTO como no return do componente, aqui é um PROPRIEDADE para ser acessada no props do componente
    <>
      <Button texto="Salvar" desabilitado />
      <Button texto="Salvar 2" onClique={buttonClicado}/>
      <Button texto="Salvar 3" />
      <Button texto="Botão 3" desabilitado />
      <Card titulo="titulo 1" descricao="descrição 1" />
      <Card titulo="titulo 2" descricao="descrição 2" />
      <Card titulo="titulo 3" descricao="descrição 3" />
    </>
    //</React.Fragment>
  )
}

export default App
// ESM
