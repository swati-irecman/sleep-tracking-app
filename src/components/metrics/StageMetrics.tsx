import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

const stageData = [
  { stage: 'Light', duration: 180 },
  { stage: 'Deep', duration: 90 },
  { stage: 'REM', duration: 100 },
  { stage: 'Wake', duration: 30 }
];

const StageMetrics: React.FC = () => {
  return (
    <section>
      <h2>Sleep Stage Durations</h2>
      <div className="card">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="duration" fill="#3f51b5" name="Minutes" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default StageMetrics;
