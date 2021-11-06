import { useState } from 'react'
import SearchBox from './Components/SearchBox/SearchBox';
import './App.css';
import ShortcutWidgets from "./components/shortcut-widgets/ShortcutWidgets";

function App() {
  // To be used in changing Logo text
  const [logo, setLogo] = useState();
  const updateLogo = (event) => setLogo(event.target.value);

  return (
    <div className="App">
      <SearchBox onSearchChange={updateLogo}/>
    </div>
     <div>
         <ShortcutWidgets />
      </div>
  );
}

export default App;
