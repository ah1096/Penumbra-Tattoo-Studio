import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/NavBar.js'
import {Home} from './Components/Home.js'
import {About} from './Components/About.js'
import {Artists} from './Components/Artists.js'
import {Contact} from './Components/Contact.js'



function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Artists/>
      <Contact/>
    </div>
  );
}

export default App;
