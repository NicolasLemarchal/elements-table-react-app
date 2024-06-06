import React from 'react';

import '../style/About.css';

import react from '../images/react.png';
import electron from '../images/electron.png';

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <div>
          <img src={react} className="about-logo spin" alt="logo-react" />
          <img src={electron} className="about-logo spin" alt="logo-electron" />
        </div>
        <p>
          Web-Application React.<br></br>Office-Application Electron.
        </p>
        <a
          className="about-link"
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

export default About;
