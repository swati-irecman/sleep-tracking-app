import React from 'react';

const LifestyleMetrics: React.FC = () => {
  return (
    <section>
      <h2>Lifestyle & Behavioral Metrics</h2>
      <div className="card-grid">
        <div className="card">
          <h4>Sleep Debt</h4>
          <p>1h 30m</p>
        </div>
        <div className="card">
          <h4>Mood Before Sleep</h4>
          <p>Calm</p>
        </div>
        <div className="card">
          <h4>Caffeine Intake</h4>
          <p>1 cup</p>
        </div>
        <div className="card">
          <h4>Daily Activity Level</h4>
          <p>Moderate</p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleMetrics;
