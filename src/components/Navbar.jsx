import React from 'react';

import '../style/Navbar.css';

import logo from '../images/react.png';
import arrowIcon from '../images/arrow-up.svg';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={logo} className="nav-logo reverse" alt="logo-react" />
        </a>
        <ul className="navbar-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À Propos</a></li>
        </ul>
      </nav>
      <button className="arrow-up" onClick={scrollToTop}>
        <img src={arrowIcon} alt="arrow-up" />
      </button>
    </>
  );
};

export default Navbar;
