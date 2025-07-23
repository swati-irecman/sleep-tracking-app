import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const hypnogramData = [
  { time: '10PM', stage: 3 },
  { time: '11PM', stage: 2 },
  { time: '12AM', stage: 1 },
  { time: '1AM', stage: 0 },
  { time: '2AM', stage: 1 },
  { time: '3AM', stage: 2 },
  { time: '4AM', stage: 3 },
  { time: '5AM', stage: 2 },
];

// Map stage numbers to labels
const stageLabels: { [key: number]: string } = {
  0: 'Awake',
  1: 'Light Sleep',
  2: 'Deep Sleep',
  3: 'REM',
};

const AdvancedInsights: React.FC = () => {
  return (
    <section>
      <h2>Advanced Sleep Insights</h2>

      {/* Grid for text-based cards */}
      <div className="card-grid top-cards">
        <div className="card">
          <h4>Chronotype</h4>
          <p>Intermediate</p>
        </div>
        <div className="card">
          <h4>Circadian Rhythm Alignment</h4>
          <p>92%</p>
        </div>
        <div className="card">
          <h4>Sleep Recovery Index</h4>
          <p>85%</p>
        </div>
      </div>

      {/* Separated card for the Hypnogram chart */}
      <div className="card hypnogram-card">
        <h4>Hypnogram</h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hypnogramData}>
            <XAxis dataKey="time" />
            <YAxis
              reversed
              domain={[0, 3]}
              tickFormatter={(tick) => stageLabels[tick]}
              ticks={[0, 1, 2, 3]}
            />
            <Tooltip
              formatter={(value: any) => stageLabels[value]}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Line type="monotone" dataKey="stage" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default AdvancedInsights;
