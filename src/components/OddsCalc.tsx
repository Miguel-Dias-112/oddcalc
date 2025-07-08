
function OddCalc({valor, odd }: {valor?: number | undefined, odd?: number | undefined, }) {
  const resultado = (valor !== undefined && odd !== undefined) ? (valor * odd).toFixed(2) : '0.00';
  return (
    <div className="OddCalc">

      <main>
          <div className="oddContainer">
              
            
              <text type="number" className='valor'>Valor: {valor?.toFixed(2)}rs</text>
            <span className='odd'>Odd: {odd}</span>
              <span className='resultado'>Retorno: {resultado}</span>
          </div>
          
      </main>
    </div>
  )
}

export default OddCalc
