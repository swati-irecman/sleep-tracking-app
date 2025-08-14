import React, { useState, useEffect, useRef } from 'react';
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
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Detect mobile and close sidebar initially
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when clicking outside (only on mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth <= 768 &&
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
      >
        <div className="sidebar-buttons">
          <button onClick={() => navigate('/add-data')} className="sidebar-btn">
            Add Sleep Data
          </button>
          <button onClick={() => navigate('/BeforeSleepingQuestions')} className="sidebar-btn">
            Before Sleeping Questions
          </button>
          <button onClick={() => navigate('/questionnaire')} className="sidebar-btn">
            Questionnaire
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

      {/* Main content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1 className="navbar-title">Sleep Analysis Dashboard</h1>
        </div>

        {/* Dashboard content */}
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
