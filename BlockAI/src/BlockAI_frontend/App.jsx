import { useState } from "react";

import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./Components/SearchResultsList";


function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <img src="/src/BlockAI Logo.png" alt=""/>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <div style={{ color: 'white', textAlignVertical: "center",textAlign: "center", paddingTop: "5vh" }} >Welcome to BLOCKAI detector! A 3rd party Human Machine Interface powered by Blockchain.</div>;
    </div>
  );
}

export default App;
