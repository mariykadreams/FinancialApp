import './Card.css'

interface Props{
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className="card">
        <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" alt="Image" />

        <div className="details">
            <h2>{companyName}</h2>
            <p>{ticker}&</p>
            <p>{price}$</p>

        </div>
    </div>
    
  )
}

export default Card;