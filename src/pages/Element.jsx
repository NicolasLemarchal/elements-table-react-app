import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Navbar from "../components/Navbar.jsx";
import ModelViewer from '../components/ModelGLB.jsx';

import elementsData from '../data/info-elements.json';

import '../style/pages/Element.css';

const filteredData = elementsData.filter(obj => obj.hasOwnProperty('elements'));
const elements = filteredData.map(obj => obj.elements).flat();

function ElementPage() {
  const { number } = useParams();
  const navigate = useNavigate();
  const [foundElement, setElement] = useState(null);

  useEffect(() => {
    const element = elements.find(elem => elem.number === Number(number));
    if (!element) {
      navigate("/");
    } else {
      setElement(element);
    }
  }, [number, navigate]);

  if (!foundElement) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="element-details">
        <h2>Détails de l'élément : {foundElement.name} ({foundElement.symbol})</h2>
        <ModelViewer modelUrl={foundElement.bohr_model_3d} />
        <p><strong>Numéro atomique :</strong> {foundElement.number}</p>
        <p><strong>Masse atomique :</strong> {foundElement.atomic_mass}</p>
        <p><strong>Catégorie :</strong> {foundElement.category}</p>
        <p><strong>Phase :</strong> {foundElement.phase}</p>
        <p><strong>Apparence :</strong> {foundElement.appearance}</p>
        <p><strong>Résumé :</strong> {foundElement.summary}</p>
        <p><strong>Découvert par :</strong> {foundElement.discovered_by}</p>
      </div>
    </div>
  );
};

export default ElementPage;
