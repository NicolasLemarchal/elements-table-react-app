import React from 'react';
import { Link } from 'react-router-dom';

import '../style/components/ElementGrid.css'

function ElementGridComponent({ elements }) {
  return (
    <div className="grid-container">
      {elements.map((element, index) => (
        <Link key={index} to={`/${element.number}`} className={`grid-item ${element.number === "" ? 'hidden' : ''}`}>
          <div>{element.symbol}</div>
          <div>{element.number}</div>
        </Link>
      ))}
    </div>
  );
}

export default ElementGridComponent;
