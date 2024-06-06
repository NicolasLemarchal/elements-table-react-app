import React from 'react';
import { Link } from 'react-router-dom';

import '../style/ElementGrid.css'

function ElementGridComponent({ elements }) {
  return (
    <div className="grid-container">
      {elements.map((element, index) => (
        <Link key={index} to={`/${element.symbol}`} className={`grid-item ${element.symbol === "" ? 'hidden' : ''}`}>
          <div>{element.symbol}</div>
          <div>{element.atomicNumber}</div>
        </Link>
      ))}
    </div>
  );
}

export default ElementGridComponent;
