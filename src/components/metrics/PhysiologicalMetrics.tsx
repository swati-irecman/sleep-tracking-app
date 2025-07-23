import React from 'react';

const PhysiologicalMetrics: React.FC = () => {
  return (
    <section>
      <h2>Physiological Metrics</h2>
      <div className="card-grid">
        <div className="card">
          <h4>Avg Heart Rate</h4>
          <p>62 bpm</p>
        </div>
        <div className="card">
          <h4>Respiratory Rate</h4>
          <p>16 breaths/min</p>
        </div>
        <div className="card">
          <h4>SpO2</h4>
          <p>97%</p>
        </div>
        <div className="card">
          <h4>Restlessness</h4>
          <p>Low</p>
        </div>
        <div className="card">
          <h4>Snoring Duration</h4>
          <p>12 min</p>
        </div>
      </div>
    </section>
  );
};

export default PhysiologicalMetrics;
