import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../style/components/Navbar.css';

import logo from '../images/react.png';
import arrowIcon from '../images/arrow-up.png';

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
        <Link to={"/"}>
          <img src={logo} className="nav-logo reverse" alt="logo-react" />
        </Link>
        <ul className="navbar-links">
          <li>
          <Link to={"/"}>Accueil</Link>
          </li>
          <li>
          <Link to={"/about"}>À Propos</Link>
          </li>
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
