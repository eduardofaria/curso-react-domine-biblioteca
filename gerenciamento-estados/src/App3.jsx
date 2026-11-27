import { useState } from 'react'
import './App.css'
import styles from './App2.module.css'
import { InputGroup } from './components/InputGroup/InputGroup'



const toCelsius = (f) => (f - 32) / 1.8
const toFahrenheit = (c) => c * 1.8 + 32 

function App() {  

  const [temperatura, setTemperatura] = useState("0")
  const [escala, setEscala] = useState("°C")

  const celsius = escala === "°F"? toCelsius(parseFloat(temperatura)) : parseFloat(temperatura)
  const fahrenheit = escala === "°C"? toFahrenheit(parseFloat(temperatura)) : parseFloat(temperatura)

  return (
    <>


      <div className={styles.container}>
        <h2>Conversor de Temperatura</h2>
{/*         <div className={styles.inputGroup}>
          <label htmlFor="celsius">Celsius:</label>
          <input type="number" id="celsius" value={escala === "°C"? temperatura : celsius.toFixed(1)} onChange={
            (e) => {
              setEscala("°C")
              setTemperatura(e.target.value)
            }}/>
          <span>°C</span>
        </div> */}

        <InputGroup unidade="°C" label="Celsius" valor={escala === "°C"? temperatura : celsius.toFixed(1) } 
        tipo="number" 
        onValueChange={(v) => {
          setEscala("°C")
          setTemperatura(v)
        }}/>

       {/*  <div className={styles.inputGroup}>
          <label htmlFor="fahrenheit">Fahrenheit:</label>
          <input type="number" id="fahrenheit" value={ escala === "°F"? temperatura : fahrenheit.toFixed(1) } onChange={
            (e) => {
              setEscala("°F")
              setTemperatura(e.target.value)
            }} />
          <span>°F</span>
        </div> */}
        <InputGroup unidade="°F" label="Fahrenheit" valor={escala === "°F"? temperatura : fahrenheit.toFixed(1) } 
        tipo="number" 
        onValueChange={(v) => {
          setEscala("°F")
          setTemperatura(v)
        }}/>
      </div>
      <p>Temperatura atual: <b>{celsius.toFixed(1)}°C</b> é igual a <b>{fahrenheit.toFixed(1)}°F</b></p>
    </>
  )
}

export default App
