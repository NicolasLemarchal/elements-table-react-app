import React from 'react';
import { Link } from 'react-router-dom';

import '../style/components/ElementGrid.css'

function ElementGrid({ elements }) {
  return (
    <div className="grid-container">
      {elements.map((element, index) => (
        <Link key={index} to={`/${element.number}`} className={`grid-item ${element.number === "" ? 'hidden' : ''}`}
        style={{ borderColor: element.color || 'white' }}>
          <div style={{ color: element.color || 'white' }}>{element.symbol}</div>
          <div style={{ color: element.color || 'white' }}>{element.number}</div>
        </Link>
      ))}
    </div>
  );
}

export default ElementGrid;
