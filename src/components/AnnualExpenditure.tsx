import React from 'react';
import './FinancialComponent.css'; 

const AnnualExpenditure: React.FC = () => {
  return (
    <div className="financial-container">
      <h5>Annual Expenditure</h5>
      <p className="amount">$1,020,123.23</p> 
    </div>
  );
}

export default AnnualExpenditure;
