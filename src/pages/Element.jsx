import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import elementsData from '../data/info-elements.json';

const filteredData = elementsData.filter(obj => obj.hasOwnProperty('elements'));
const elements = filteredData.map(obj => obj.elements).flat();

function ElementPage() {
  const { symbol } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const element = elements.find(elem => elem.symbol === symbol);
    if (!element) {
      navigate("/");
    }
  }, [symbol, navigate]);
  
  return (
    <div>
      <h2>Détails de l'élément {symbol}</h2>
    </div>
  );
};

export default ElementPage;
