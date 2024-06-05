import React from 'react';

import '../style/App.css';

import react from '../images/react.png';
import electron from '../images/electron.png';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <img src={react} className="app-logo spin" alt="logo-react" />
          <img src={electron} className="app-logo spin" alt="logo-electron" />
        </div>
        <p>
          Web-Application React.<br></br>Office-Application Electron.
        </p>
        <a
          className="app-link"
          href="https://nicolaslemarchal.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicolas Lemarchal
        </a>
      </header>
    </div>
  );
}

export default App;
