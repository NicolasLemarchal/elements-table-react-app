import React from 'react';

import ElementGrid from '../components/ElementGrid';

import elementsData from '../data/elements.json';

import '../style/Table.css';

const Table = () => {
  const filteredData = elementsData.filter(obj => obj.hasOwnProperty('elements'));
  const elements = filteredData.map(obj => obj.elements).flat();

  const filteredData2 = elementsData.filter(obj => obj.hasOwnProperty('elements2'));
  const elements2 = filteredData2.map(obj => obj.elements2).flat();

  const filteredData3 = elementsData.filter(obj => obj.hasOwnProperty('elements3'));
  const elements3 = filteredData3.map(obj => obj.elements3).flat();

  return (
    <div className="table">
      <h1 className="title">Periodic Table</h1>
      <ElementGrid elements={elements} />
      <div className="separator"></div>
      <ElementGrid elements={elements2} />
      <ElementGrid elements={elements3} />
    </div>
  );
};

export default Table;
