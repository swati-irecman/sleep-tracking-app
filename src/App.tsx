import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SleepDashboard from './components/SleepDashboard';
import SleepInputForm from './components/SleepInputForm'; 
import MonthlyOverview from './components/metrics/MonthlyOverview';
import WeeklySleepChart from './components/metrics/WeeklySleepChart';


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-layout">
        
        <div className="content-layout">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<SleepDashboard />} />
              <Route path="/add-data" element={<SleepInputForm />} />
              <Route path="/monthly" element={<MonthlyOverview />} />
              <Route path="/monthly-sleep" element={<WeeklySleepChart />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
