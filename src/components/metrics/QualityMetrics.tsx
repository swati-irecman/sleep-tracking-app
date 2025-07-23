import React from 'react';

const QualityMetrics: React.FC = () => {
  return (
    <section>
      <h2>Sleep Quality & Pattern Metrics</h2>
      <div className="card-grid">
        <div className="card">
          <h4>Sleep Quality Score</h4>
          <p>87 / 100</p>
        </div>
        <div className="card">
          <h4>Sleep Consistency</h4>
          <p>High</p>
        </div>
        <div className="card">
          <h4>Sleep Regularity Index</h4>
          <p>82%</p>
        </div>
        <div className="card">
          <h4>Time to Deep Sleep</h4>
          <p>45 min</p>
        </div>
        <div className="card">
          <h4>Fragmentation Index</h4>
          <p>Low</p>
        </div>
      </div>
    </section>
  );
};

export default QualityMetrics;
