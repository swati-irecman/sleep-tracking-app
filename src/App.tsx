import React from 'react';
import './App.css';
import SleepDashboard from './components/SleepDashboard';

const App: React.FC = () => {
  return (
    <>
      <header className="header">Sleep Analysis Dashboard</header>
      <main className="main">
        <SleepDashboard />
      </main>
    </>
  );
};

export default App;
