import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SleepDashboard from './components/SleepDashboard';
import SleepInputForm from './components/SleepInputForm';
import Questionnaire from './components/Questionnaire'; 
import BeforeSleepingQuestions from './components/BeforeSleepingQuestions';
import MonthlyOverview from './components/metrics/MonthlyOverview';
import WeeklySleepChart from './components/metrics/WeeklySleepChart';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <div className="app-layout">
        <div className="content-layout">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={isLoggedIn ? <SleepDashboard /> : <Navigate to="/" />}
              />
              <Route
                path="/add-data"
                element={isLoggedIn ? <SleepInputForm /> : <Navigate to="/" />}
              />
              <Route
                path="/BeforeSleepingQuestions"
                element={isLoggedIn ? <BeforeSleepingQuestions /> : <Navigate to="/" />}
              />
              <Route
                path="/questionnaire"
                element={isLoggedIn ? <Questionnaire /> : <Navigate to="/" />}
              />
              <Route
                path="/monthly"
                element={isLoggedIn ? <MonthlyOverview /> : <Navigate to="/" />}
              />
              <Route
                path="/monthly-sleep"
                element={isLoggedIn ? <WeeklySleepChart /> : <Navigate to="/" />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
