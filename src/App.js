import { useState } from 'react'
import SearchBox from './Components/SearchBox/SearchBox';
import './App.css';
import ShortcutWidgets from "./Components/shortcut-widgets/ShortcutWidgets";
import Footer from './Components/Footer/Footer'

function App() {
  // To be used in changing Logo text
  const [logo, setLogo] = useState();
  const updateLogo = (event) => setLogo(event.target.value);

  return (
     <div className="App">
      <SearchBox onSearchChange={updateLogo}/>
      <div>
         <ShortcutWidgets />
         <Footer />
      </div>
    </div>
    
  );
}

export default App;
