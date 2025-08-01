import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import '../../index.css'; 

type SleepData = {
  day: string;
  sleepHours: number;
  sleepStart: string;
  sleepEnd: string;
  sleepQuality: string;
};

const weeklySleepData: SleepData[] = [
  { day: 'Monday', sleepHours: 7, sleepStart: '10:30 PM', sleepEnd: '5:30 AM', sleepQuality: 'Good' },
  { day: 'Tuesday', sleepHours: 6.5, sleepStart: '11:00 PM', sleepEnd: '5:30 AM', sleepQuality: 'Average' },
  { day: 'Wednesday', sleepHours: 8, sleepStart: '10:00 PM', sleepEnd: '6:00 AM', sleepQuality: 'Excellent' },
  { day: 'Thursday', sleepHours: 5.5, sleepStart: '12:00 AM', sleepEnd: '5:30 AM', sleepQuality: 'Poor' },
  { day: 'Friday', sleepHours: 7.2, sleepStart: '10:30 PM', sleepEnd: '5:45 AM', sleepQuality: 'Good' },
  { day: 'Saturday', sleepHours: 8.1, sleepStart: '11:00 PM', sleepEnd: '7:00 AM', sleepQuality: 'Excellent' },
  { day: 'Sunday', sleepHours: 6.8, sleepStart: '11:30 PM', sleepEnd: '6:15 AM', sleepQuality: 'Fair' },
];

const WeeklySleepChart = () => {
  const [selectedDay, setSelectedDay] = useState<SleepData | null>(null);
  const navigate = useNavigate();

  const handleChartClick = (e: any) => {
    if (e && e.activeLabel) {
      const found = weeklySleepData.find(day => day.day === e.activeLabel);
      if (found) setSelectedDay(found);
    }
  };

  return (
    <div className="chart-container">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Dashboard</button>

      <h2 className="chart-title">Weekly Sleep Duration</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklySleepData} onClick={handleChartClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis unit=" hrs" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sleepHours"
            stroke="#3366cc"
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {selectedDay && (
        <div className="sleep-details">
          <h3>Sleep Details for <span>{selectedDay.day}</span></h3>
          <p><strong>Sleep Duration:</strong> {selectedDay.sleepHours} hrs</p>
          <p><strong>Sleep Start:</strong> {selectedDay.sleepStart}</p>
          <p><strong>Sleep End:</strong> {selectedDay.sleepEnd}</p>
          <p><strong>Sleep Quality:</strong> {selectedDay.sleepQuality}</p>
        </div>
      )}
    </div>
  );
};

export default WeeklySleepChart;
