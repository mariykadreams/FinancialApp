import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const[searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const[serverError, setServevrError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) =>{
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = async (e: SyntheticEvent) =>{
        const result = await searchCompanies(search);
        if (typeof result === "string") {
          setServevrError(result);
        } else if (Array.isArray(result)) {
          setSearchResult(result);
        }

        console.log("Search Result:",searchResult);
    };

  return (
    <div className='App'>
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      
      <CardList searchResults={searchResult}/>

      {serverError && <h1>Unable to connect to API{serverError}</h1>}
    </div>
  )
}

export default App
