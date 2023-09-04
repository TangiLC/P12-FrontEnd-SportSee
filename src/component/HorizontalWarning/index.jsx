import React from 'react';
import './style.css';

const HorizontalWarning = () => {
  return (
    <div >
      
      <div className="alert alert-warning orientation-alert" role="alert">
        Veuillez orienter votre écran en mode horizontal pour une meilleure expérience.
      </div>
    </div>
  );
};

export default HorizontalWarning;