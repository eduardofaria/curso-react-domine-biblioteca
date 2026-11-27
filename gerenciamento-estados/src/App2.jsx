import { useState } from 'react'
import './App.css'
import styles from './App2.module.css'


function App() {  

  const [valor, setValor] = useState("0")
  const [unidade, setUnidade] = useState("°C")

  const celsius = unidade === "°F"? ((parseFloat(valor) - 32) / 1.8) : parseFloat(valor)
  const fahrenheit = unidade === "°C"? (parseFloat(valor) * 1.8 + 32) : parseFloat(valor)
    // Estado Derivado - Fonte Única da Verdade - Problemas ao ter um estado dependendo de outro estado.
    // Os estados devem ser autosuficientes
  return (
    <>


      <div className={styles.container}>
        <h2>Conversor de Temperatura</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="celsius">Celsius:</label>
          <input type="number" value={ unidade === "°C"? valor : celsius.toFixed(1) } onChange={
            (e) => {
              setUnidade("°C")
              setValor(e.target.value)
            }} />
          <span>°C</span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="fahrenheit">Fahrenheit:</label>
          <input type="number" value={ unidade === "°F"? valor : fahrenheit.toFixed(1) } onChange={
            (e) => {
              setUnidade("°F")
              setValor(e.target.value)
            }} />
          <span>°F</span>
        </div>
      </div>
      <p>Temperatura atual: <b>{celsius.toFixed(1)}°C</b> é igual a <b>{fahrenheit.toFixed(1)}°F</b></p>
    </>
  )
}

export default App
