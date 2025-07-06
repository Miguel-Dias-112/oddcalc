import { useState } from 'react'


function CalcRisco({ oddMenor, oddMaior }: {  oddMenor: number, oddMaior: number }) {


const oddMenorGanha = (1 / oddMenor * 100).toFixed(2);
const oddMaiorGanha = (1 / oddMaior * 100).toFixed(2);
const empate = (100 - (parseFloat(oddMaiorGanha) + parseFloat(oddMenorGanha))).toFixed(2);
const ChanceRetorno = (parseFloat(oddMenorGanha) + parseFloat(oddMaiorGanha)).toFixed(2);
    console.log('oddMenor', oddMenor);
  console.log('oddMenorGanha', oddMenorGanha);
  console.log('oddMaiorGanha', oddMaiorGanha);
  console.log('empate', empate);
  return (
    <div className  ="CalcRisco">
        <div className='textCtn'>

        <span className='title'>Calculadora de Risco</span>
        <span className='odd'> Odd Menor Ganha: {oddMenorGanha}%</span>
        <span className='odd'>Odd Maior Ganha: {oddMaiorGanha}%</span>
        <span className='odd'> Chance de retorno: {ChanceRetorno}%</span>
        <span className='odd'> Empate: {empate}%</span>

        {
            (parseFloat(empate) > 25 )
                ? <span className='alertaRuim'>Cuidado, risco alto!</span>
                : <span className='alerta'>Risco aceitável</span>
        }
        </div>
    </div>
  )
}

export default CalcRisco
