import { JSX } from 'react';
import Card from '../Card/Card';
import './CardList.css'
import { CompanySearch } from '../../company';
import { v4 as uuidv4} from "uuid";

interface Props{
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return <Card key={uuidv4()} id={result.symbol} searchResult={result}/>;
        })
      ) : (
        <h1>No result</h1>
      )}
    </>
  );
};

export default CardList;