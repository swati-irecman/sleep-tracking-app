import React from 'react';
import '../../index.css';

const coreData = {
  TotalSleepTime: '7h 45m',
  TimeInBed: '8h',
  SleepOnsetLatency: '15 min',
  SleepEfficiency: '93%',
  WASO: '20 min',
  NumberOfAwakenings: 3,
  AwakeningDuration: '10 min',
  Bedtime: '11:00 PM',
  WakeupTime: '6:45 AM'
};

const CoreMetrics: React.FC = () => {
  return (
    <section>
      <h2>Core Sleep Metrics</h2>
      <div className="card-grid">
        {Object.entries(coreData).map(([key, value]) => (
          <div className="card" key={key}>
            <h4>{key.replace(/([A-Z])/g, ' $1')}</h4>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreMetrics;
