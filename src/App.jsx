import './App.css'
import Input from './components/Input/Input'
import Amount from './components/Amount/Amount'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [capital, setCapital] = useState(0)
  const [taxa, setTaxa] = useState(0)
  const [prazo, setPrazo] = useState(0)
  const [valor, setValor] = useState({
    capital: 0,
    juros: 0,
    total: 0
  })
  const [inputOk, setInputOk] = useState(false)

  function handleClick() {
    inputEmpty()
    const calculo = capital * ((1 + taxa / 100) ** prazo)

    setValor({
      capital: capital,
      juros: calculo - capital,
      total: calculo
    })
  }

  function inputEmpty() {
    if (!capital || !taxa || !prazo) {
      setInputOk(true)
      setIsOpen(false)
      return
    } else {
      setIsOpen(true)
      setInputOk(false)
    }
  }

  return (
    <div className='container'>
      <h2>Calculadora de juros compostos</h2>
      <Input titulo='Capital' simbolo='R$' mudar={setCapital} />
      <div className='container-inputs'>
        <Input titulo='Taxa de juros (anual)' simbolo='%' mudar={setTaxa} />
        <Input titulo='Prazo (anual)' simbolo='' mudar={setPrazo} />
      </div>
      <div className='btn-calcular' onClick={handleClick}>Calcular</div>

      {isOpen &&
        <div className='container-amount'>
          <Amount titulo='Capital' valor={valor.capital.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} />
          <Amount titulo='Total em juros' valor={valor.juros.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} />
          <Amount titulo='Valor total' valor={valor.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} />
        </div>
      }

      {inputOk &&
        <p className='obrigatorio'>Prencha todos os campos.</p>
      }


    </div>
  )
}

export default App