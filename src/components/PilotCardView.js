import React from 'react';
import PilotsImage from './PilotsImage';
import CarImage from '../images/mclaren.png';

const FormulaPilot = ({
  position,
  code,
  givenName,
  familyName,
  dateOfBirth,
  nationality,
  constructorName,
  constructorWebsite
}) => {
  return (
    <div className="flex-container">
      <div>
        <h2>#{position}</h2>
        <img src={CarImage} className="car-image" image={givenName} alt="" />
        <PilotsImage image={givenName} alt="" />
        <h2>
          {givenName} ({code})
        </h2>
        <h2>{familyName}</h2>
        <h2>{dateOfBirth}</h2>
        <h2>{nationality}</h2>
        <h2>
          <a href={constructorWebsite}>{constructorName}</a>
        </h2>
      </div>
    </div>
  );
};

export default FormulaPilot;
