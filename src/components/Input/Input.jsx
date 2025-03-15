import './style.css'

const Input = ({ titulo, simbolo, mudar }) => {
    return (
        <div>
            <label htmlFor={titulo} className='input-label'>{titulo}</label>

            <div className='area-input'>
                {simbolo === '' ?
                    <label htmlFor={titulo}></label>
                    :
                    <label htmlFor={titulo} className='simbolo-nao-vazio'>{simbolo}</label>
                }

                <input type="number" id={titulo} placeholder='0,00'
                    className={simbolo === '' ? 'input-vazio' : 'input'}
                    onChange={(e) => mudar(Number(e.target.value))}
                />
            </div>
        </div>
    )
}

export default Input