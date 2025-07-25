import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SleepDashboard from './components/SleepDashboard';
import SleepInputForm from './components/SleepInputForm'; 

const App: React.FC = () => {
  return (
    <Router>
      <header className="header">Sleep Analysis Dashboard</header>
      <main className="main">
        <Routes>
          <Route path="/" element={<SleepDashboard />} />
          <Route path="/add-data" element={<SleepInputForm />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

