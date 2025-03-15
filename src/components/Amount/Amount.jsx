import './style.css'

const Amount = ({titulo, valor}) => {
    return (
        <div className="card-amount">
            <p>{ titulo }</p>
            <p>R${ valor }</p>
        </div>
    )
}

export default Amount