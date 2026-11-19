// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
//import React from "react" // só foi necessário para usar <React.Fragment>. Desnecessário se usar apenas <></>

function App() {
  
  let n = 10;

  const pessoas = ["Daniel", "Maria", "João", "Joana"];

  const contatos = [
    {nome: "Daniel", email: "daniel@server"},
    {nome: "Maria", email: "maria@server"},
    {nome: "João", email: "joao@server"}
  ];

  return (
    //<React.Fragment>
    <>
      <h1>Teste H1 { n * 2 }</h1>
      <h2>Teste React</h2>
      <p>{ pessoas.join(", ") }</p>
      <div>
        { pessoas.map((pessoa) => (
          <p> { pessoa } </p>)
        )
        }
      </div>
      <div>
        <h3>Lista de Contatos</h3>
        {contatos.map( (contato) => (
          <>
            <h4>{contato.nome}</h4>
            <p>{contato.email}</p>
          </>
        ) )}
      </div>
    </>
    //</React.Fragment>
  )
}

export default App
// ESM
