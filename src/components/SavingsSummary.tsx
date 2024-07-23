import React from 'react';
import './SavingsSummary.css'; 

const SavingsSummary: React.FC = () => {
  return (
    <div className="savings-summary">
      <div className="summary-content">
        <h5>Savings Summary</h5>
        <div className="status">
          <span className="icon approved"></span> 
          <span>Approved</span>
          <span className="amount">$1,222,099M</span> 
        </div>
        <div className="status">
          <span className="icon unapproved"></span> 
          <span>Unapproved</span>
          <span className="amount">$80,192M</span> 
        </div>
      </div>
      <div className="graph">
      </div>
    </div>
  );
}

export default SavingsSummary;
