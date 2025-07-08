import { useState } from 'react'

import './App.css'
import OddCalc from './components/OddsCalc'
import CalcRisco from './components/CalculadorRisco'

function App() {
  const [banca, setBanca] = useState(0)
  const [oddMenor, setOddMenor] = useState(0)
  const [oddMaior, setOddMaior] = useState(0)

  const valorMenor = banca * (oddMenor/(oddMenor + oddMaior));
  const valorMaior = banca * (oddMaior/(oddMenor + oddMaior));  
  return (
    <div className  ="App">
      <h2>Caluladora Odds</h2>
      <div className='inlineCtn'>
        <div className="bancaContainer">
          
            <input type="number" className='banca' placeholder="Banca" onChange={(e) => setBanca(Number(e.target.value))} />
            <input type="number" className='banca' placeholder="Odd Menor" onChange={(e) => setOddMenor(Number(e.target.value))} />
            <input type="number" className='banca' placeholder="Odd Maior" onChange={(e) => setOddMaior(Number(e.target.value))} />
        </div>
        <CalcRisco   oddMenor={oddMenor} oddMaior={oddMaior}></CalcRisco>
      </div>
      <div className='inlineCtn'>
        <OddCalc valor={valorMaior} odd={oddMenor}></OddCalc>
        <OddCalc valor={valorMenor} odd={oddMaior}></OddCalc>
      </div>
      <iframe  src="https://www.oddsagora.com.br/football/world/copa-do-mundo-de-clubes-fifa/"/>
      
    </div>
  )
}

export default App
