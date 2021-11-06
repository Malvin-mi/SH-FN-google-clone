import { useState } from 'react'
import SearchBox from './SearchBox/SearchBox';
import './App.css';

function App() {
  const [logo, setLogo] = useState();
  const updateLogo = (event) => setLogo(event.target.value);

  return (
    <div className="App">
      <SearchBox onSearchChange={updateLogo}/>
    </div>
  );
}

export default App;
