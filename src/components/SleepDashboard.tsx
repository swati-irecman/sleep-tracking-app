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
      {/* Navbar */}
      <div className="navbar">
        <button onClick={toggleSidebar} className="menu-toggle">
          ☰
        </button>
        <h1 className="navbar-title">Sleep Analysis Dashboard</h1>
        <div />
      </div>

      {/* Collapsible Topbar directly below navbar */}
      <div className={`topbar ${isSidebarOpen ? 'open' : 'closed'}`}>
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
          <button onClick={() => navigate('/')} className="sidebar-btn">
            Logout
          </button>
        </div>
      </div>

      {/* Main dashboard content */}
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
  );
};

export default SleepDashboard;
