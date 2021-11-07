import { useState } from 'react';
import './App.css';
import ShortcutWidgets from "./Components/shortcut-widgets/ShortcutWidgets";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import styled from 'styled-components/macro';

const Shortcuts = styled.div`
margin: 2rem 0 2rem 0;`

function App() {
  // To be used in changing Logo text
  const [logo, setLogo] = useState();
  const updateLogo = (event) => setLogo(event.target.value);

  return (
     <div className="App">
       <Navbar/>
       <Home/>

      <Shortcuts >
         <ShortcutWidgets/>
      </Shortcuts>
      <div>
      <Footer />
      </div>
    </div>
    
  );
}

export default App;
