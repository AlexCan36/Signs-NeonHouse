import logo from './logo.svg';
import './App.css';
import instaLogo from './Assets/Pics/Screenshot-logo.png';
import neonLogo from './Assets/Pics/blacklogocircle.png';
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
          <a target='_blank' href="https://www.instagram.com/neon_house_signs/?hl=en"><img border="1" alt="Insta" src={neonLogo} width="60" height="60"></img></a>
          <li>Neon House Signs</li>
          <li onClick={() => setcurrentPage("Aboutus")}>About Us</li>
          <li onClick={() => setcurrentPage("Signs")}>Signs</li>
          <li onClick={() => setcurrentPage("Contact")}>Contact</li>
          <a target='_blank' href="https://www.instagram.com/neon_house_signs/?hl=en"><img border="1" alt="Insta" src={neonLogo} width="60" height="60"></img></a>
        </ul>
      </nav>
      {currentPage === "Aboutus" ? <Aboutus />
        : currentPage === "Signs" ? <Signs />
          : <Contact />}

      <footer>
        <div class='row'>
          <div class="column">
            <h4>Any questions or concerns?
              Let us know and we'll be happy to talk to you!
              P:801.830.2981
              E:NEONHOUSESIGNS@GMAIL.COM
              #HablamosEspañol</h4>
          </div>
          <div class='footerlogo'>
            <a target='_blank' href="https://www.instagram.com/neon_house_signs/?hl=en"><img border="1" alt="Insta" src={instaLogo} width="80" height="80"></img></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
