import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoreMetrics from './metrics/CoreMetrics';
import StageMetrics from './metrics/StageMetrics';
import QualityMetrics from './metrics/QualityMetrics';
import PhysiologicalMetrics from './metrics/PhysiologicalMetrics';
import LifestyleMetrics from './metrics/LifestyleMetrics';
import AdvancedInsights from './metrics/AdvancedInsights';
import SleepHistoryCalendar from './visuals/SleepHistoryCalendar';

const SleepDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-buttons">
          <button onClick={() => navigate('/add-data')} className="sidebar-btn">
            Add Sleep Data
          </button>
          <button onClick={() => navigate('/monthly')} className="sidebar-btn">
            Monthly Overview
          </button>
          <button onClick={() => navigate('/monthly-sleep')} className="sidebar-btn">
            Weekly Overview
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="navbar">
          <button onClick={toggleSidebar} className="menu-toggle">
            ☰
          </button>
          <h1 className="navbar-title">Sleep Analysis Dashboard</h1>
          <div />
        </div>

        <div className="dashboard-content">
          <CoreMetrics />
          <StageMetrics />
          <QualityMetrics />
          <PhysiologicalMetrics />
          <LifestyleMetrics />
          <AdvancedInsights />
          <SleepHistoryCalendar />
        </div>
      </div>
    </div>
  );
};

export default SleepDashboard;
