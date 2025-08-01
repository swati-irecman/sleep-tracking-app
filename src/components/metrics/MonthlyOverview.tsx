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

type DailySleep = {
  date: string;
  sleepHours: number;
  sleepStart: string;
  sleepEnd: string;
  sleepQuality: string;
};

type MonthSleepData = {
  month: string;
  dailyData: DailySleep[];
};

const generateDummyData = (month: string, days: number): MonthSleepData => {
  const dailyData: DailySleep[] = [];

  for (let i = 1; i <= days; i++) {
    const randomHours = +(Math.random() * 3 + 5.5).toFixed(1); // 5.5 to 8.5 hrs
    const sleepStart = '10:30 PM';
    const sleepEnd = '6:00 AM';
    const qualityOptions = ['Excellent', 'Good', 'Fair', 'Average', 'Poor'];
    const sleepQuality = qualityOptions[Math.floor(Math.random() * qualityOptions.length)];

    dailyData.push({
      date: `${month} ${i}`,
      sleepHours: randomHours,
      sleepStart,
      sleepEnd,
      sleepQuality,
    });
  }

  return { month, dailyData };
};

const months = [
  generateDummyData('January', 31),
  generateDummyData('February', 29),
  generateDummyData('March', 31),
  generateDummyData('April', 30),
  generateDummyData('May', 31),
  generateDummyData('June', 30),
  generateDummyData('July', 31),
];

const MonthlySleepChart = () => {
  const [selectedMonth, setSelectedMonth] = useState<MonthSleepData | null>(null);
  const navigate = useNavigate();

  const handleMonthClick = (month: MonthSleepData) => {
    setSelectedMonth(month);
  };

  return (
    <div className="monthly-page">
      <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
      <h2 className="monthly-title">Monthly Sleep Overview</h2>

      {/* Monthly Graph */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={months.map(m => ({
          month: m.month,
          avgSleep: +(
            m.dailyData.reduce((sum, d) => sum + d.sleepHours, 0) / m.dailyData.length
          ).toFixed(1),
        }))}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis unit=" hrs" />
          <Tooltip />
          <Line type="monotone" dataKey="avgSleep" stroke="#2a72d4" strokeWidth={3} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Month Selector */}
      <div className="month-selector">
        {months.map((monthData, index) => (
          <button key={index} className="month-btn" onClick={() => handleMonthClick(monthData)}>
            {monthData.month}
          </button>
        ))}
      </div>

      {/* Daily Calendar Style View */}
      {selectedMonth && (
        <div className="calendar-view">
          <h3>Daily Sleep Details - {selectedMonth.month}</h3>
          <div className="calendar-grid">
            {selectedMonth.dailyData.map((day, index) => (
              <div className="day-card" key={index}>
                <h4>{day.date}</h4>
                <p><strong>Sleep Hours:</strong> {day.sleepHours} hrs</p>
                <p><strong>Start:</strong> {day.sleepStart}</p>
                <p><strong>End:</strong> {day.sleepEnd}</p>
                <p><strong>Quality:</strong> {day.sleepQuality}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthlySleepChart;
