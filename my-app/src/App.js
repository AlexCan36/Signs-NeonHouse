import logo from './logo.svg';
import './App.css';
import instaLogo from  './Assets/Pics/Screenshot-logo.png';
import { useState } from 'react';
import Contact from './Components/Pages/Contact';
import Signs from './Components/Pages/Signs';
import Aboutus from './Components/Pages/Aboutus';

function App() {
  const [currentPage, setcurrentPage] = useState('Aboutus')
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li>Neon House Signs</li>
          <li onClick={() => setcurrentPage("Aboutus")}>About Us</li>
          <li onClick={() => setcurrentPage("Signs")}>Signs</li>
          <li onClick={() => setcurrentPage("Contact")}>Contact</li>
        </ul>
      </nav>
      {currentPage === "Aboutus" ? <Aboutus />
        : currentPage === "Signs" ? <Signs />
            : <Contact />}

      <footer>
        <div class='row'>
        <div class="column">
            <h5>Follow Us</h5>
            <a target='_blank' href="https://www.instagram.com/neon_house_signs/?hl=en"><img border="1" alt="Insta" src={instaLogo} width="100" height="100"></img></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
