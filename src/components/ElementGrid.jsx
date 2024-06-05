import React from 'react';

const ElementGrid = ({ elements }) => (
  <div className="grid-container">
    {elements.map((element, index) => (
      <div key={index} className={`grid-item ${element.symbol === "" ? 'hidden' : ''}`}>
        <div>{element.symbol}</div>
        <div>{element.atomicNumber}</div>
      </div>
    ))}
  </div>
);

export default ElementGrid;
