import Card from '../Card/Card';
import './CardList.css'

const CardList = () => {
  return <div>
    <Card companyName="Apple" ticker="AAPL" price={100} />
    <Card companyName="Microfot" ticker="AAPL" price={50} />
    <Card companyName="Apple" ticker="AAPL" price={100} />

  </div>;
}

export default CardList;