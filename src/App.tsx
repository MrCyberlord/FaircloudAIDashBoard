import './App.css';
import AutoPilot from './components/AutoPilot';
import AnnualExpenditure from './components/AnnualExpenditure';
import AnnualSavings from './components/AnnualSavings';
import SavingsSummary from './components/SavingsSummary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="main-container">
      <AutoPilot />
      <SavingsSummary />
      <AnnualExpenditure />
      <AnnualSavings />
      <FontAwesomeIcon icon={faArrowsUpDown} style={{ color: 'white', fontSize: '30px' }} />
    </div>
  );
}

export default App;
