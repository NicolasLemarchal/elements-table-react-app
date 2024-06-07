import React from 'react';

import ElementGrid from '../components/ElementGrid';

import elementsData from '../data/elements.json';

import '../style/pages/Table.css';

function Table() {
  const filteredData = elementsData.filter(obj => obj.hasOwnProperty('elements'));
  const elements = filteredData.map(obj => obj.elements).flat();

  return (
    <div className="table">
      <h1 className="title">Periodic Table</h1>
      <ElementGrid elements={elements} />
    </div>
  );
};

export default Table;
