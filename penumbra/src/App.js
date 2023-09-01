import { useState } from 'react';
import './App.css';
import {NavBar} from './Components/NavBar.js'
import {Home} from './Components/Home.js'
import {About} from './Components/About.js'
import {Artists} from './Components/Artists.js'
import {Contact} from './Components/Contact.js'



export function App() {

  const [page, setPage] = useState('home')

  return (
    <div>
          <NavBar uhhhh={setPage}/>
                {page === 'home' && <Home />}
                {page === 'studio' && <About />}
                {page === 'artists' && <Artists />}
                {page === 'contact' && <Contact />}
    </div>
  );
}

export default App;
