import { useState } from 'react';
import './App.css';
import {NavBar} from './Components/NavBar.js'
import {Home} from './Components/Home.js'
import {About} from './Components/About.js'
import {Artists} from './Components/Artists.js'
import {Contact} from './Components/Contact.js'
import {FAQ} from './Components/FAQ.js'
import {KrisPage} from './Components/KrisPage.js'



export function App() {

  const [page, setPage] = useState('home')

  return (
    <div>
          <NavBar uhhhh={setPage}/>
                {page === 'home' && <Home/>}
                {page === 'studio' && <About />}
                {page === 'artists' && <Artists />}
                {page === 'contact' && <Contact />}
                {page === 'FAQ' && <FAQ />}
                {page === 'krispage' && <KrisPage />}
    </div>
  );
}

export default App;
