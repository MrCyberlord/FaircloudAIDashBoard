import React from 'react';
import './AutoPilot.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const AutoPilot: React.FC = () => {
  return (
    <div className="autopilot-container">
      <div className="title">AutoPilot</div>
      <button className="toggle-button">
        <FontAwesomeIcon icon={faCircleNotch} className="glowing-icon" />
      </button>
      <div className="footer">Enabled</div>
    </div>
  );
}

export default AutoPilot;
