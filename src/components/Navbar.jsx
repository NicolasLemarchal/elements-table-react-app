import React, { useState, useEffect } from 'react';

import '../style/components/Navbar.css';

import logo from '../images/react.png';
import arrowIcon from '../images/arrow-up.svg';

const Navbar = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {showArrow && (
        <button className="arrow-up" onClick={scrollToTop}>
          <img src={arrowIcon} alt="arrow-up" />
        </button>
      )}
    </>
  );
};

export default Navbar;
