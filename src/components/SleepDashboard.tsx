import React from 'react';
import CoreMetrics from './metrics/CoreMetrics';
import StageMetrics from './metrics/StageMetrics';
import QualityMetrics from './metrics/QualityMetrics';
import PhysiologicalMetrics from './metrics/PhysiologicalMetrics';
import LifestyleMetrics from './metrics/LifestyleMetrics';
import AdvancedInsights from './metrics/AdvancedInsights';
import SleepHistoryCalendar from './visuals/SleepHistoryCalendar';

const SleepDashboard: React.FC = () => {
  return (
    <div>
      <CoreMetrics />
      <StageMetrics />
      <QualityMetrics />
      <PhysiologicalMetrics />
      <LifestyleMetrics />
      <AdvancedInsights />
      <SleepHistoryCalendar />
    </div>
  );
};

export default SleepDashboard;
