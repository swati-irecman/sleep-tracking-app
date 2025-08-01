import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SleepInputForm.css';

const SleepInputForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    bedtime: '',
    wakeTime: '',
    totalSleepTime: '',
    timeInBed: '',
    numberOfAwakenings: '',
    awakeningDuration: '',
    sleepOnsetLatency: '',
    sleepEfficiency: '',
    wakeupTime: '',
    waso: '',
    sleepQualityScore: '',
    sleepConsistency: '',
    sleepRegularityIndex: '',
    timeToDeepSleep: '',
    fragmentationIndex: '',
    avgHeartRate: '',
    respiratoryRate: '',
    spo2: '',
    restlessness: '',
    snoringDuration: '',
    sleepDebt: '',
    moodBeforeSleep: '',
    caffeineIntake: '',
    dailyActivityLevel: '',
    chronotype: '',
    circadianRhythmAlignment: '',
    sleepRecoveryIndex: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sleep data submitted:', formData);
    navigate('/');
  };

  return (
    <div className="sleep-form-container">
      <h2>Add Sleep Data</h2>
      <form onSubmit={handleSubmit}>
        {/* Section 1: Core Sleep Metrics */}
        <div className="form-section">
          <h3>Core Sleep Metrics</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Bedtime</label>
              <input
                type="time"
                name="bedtime"
                value={formData.bedtime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Wake Time</label>
              <input
                type="time"
                name="wakeTime"
                value={formData.wakeTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Total Sleep Time (h:m)</label>
              <input
                type="text"
                name="totalSleepTime"
                value={formData.totalSleepTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Time in Bed (h:m)</label>
              <input
                type="text"
                name="timeInBed"
                value={formData.timeInBed}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Number of Awakenings</label>
              <input
                type="number"
                name="numberOfAwakenings"
                value={formData.numberOfAwakenings}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Awakening Duration (min)</label>
              <input
                type="number"
                name="awakeningDuration"
                value={formData.awakeningDuration}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Sleep Onset Latency (min)</label>
              <input
                type="number"
                name="sleepOnsetLatency"
                value={formData.sleepOnsetLatency}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Sleep Efficiency (%)</label>
              <input
                type="number"
                name="sleepEfficiency"
                value={formData.sleepEfficiency}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Wakeup Time</label>
              <input
                type="time"
                name="wakeupTime"
                value={formData.wakeupTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>WASO (min)</label>
              <input
                type="number"
                name="waso"
                value={formData.waso}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
        </div>
        
        {/* Section 2: Sleep Quality & Pattern Metrics */}
        <div className="form-section">
          <h3>Sleep Quality & Pattern Metrics</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Sleep Quality Score (0-100)</label>
              <input
                type="number"
                name="sleepQualityScore"
                value={formData.sleepQualityScore}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
            <div className="form-group">
              <label>Sleep Consistency</label>
              <select
                name="sleepConsistency"
                value={formData.sleepConsistency}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Sleep Regularity Index (%)</label>
              <input
                type="number"
                name="sleepRegularityIndex"
                value={formData.sleepRegularityIndex}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
            <div className="form-group">
              <label>Time to Deep Sleep (min)</label>
              <input
                type="number"
                name="timeToDeepSleep"
                value={formData.timeToDeepSleep}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Fragmentation Index</label>
            <select
              name="fragmentationIndex"
              value={formData.fragmentationIndex}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        
        {/* Section 3: Physiological Metrics */}
        <div className="form-section">
          <h3>Physiological Metrics</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Avg Heart Rate (bpm)</label>
              <input
                type="number"
                name="avgHeartRate"
                value={formData.avgHeartRate}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Respiratory Rate (breaths/min)</label>
              <input
                type="number"
                name="respiratoryRate"
                value={formData.respiratoryRate}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>SpO2 (%)</label>
              <input
                type="number"
                name="spo2"
                value={formData.spo2}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
            <div className="form-group">
              <label>Restlessness</label>
              <select
                name="restlessness"
                value={formData.restlessness}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form-group">
              <label>Snoring Duration (min)</label>
              <input
                type="number"
                name="snoringDuration"
                value={formData.snoringDuration}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
        </div>
        
        {/* Section 4: Lifestyle & Behavioral Metrics */}
        <div className="form-section">
          <h3>Lifestyle & Behavioral Metrics</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Sleep Debt (h:m)</label>
              <input
                type="text"
                name="sleepDebt"
                value={formData.sleepDebt}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mood Before Sleep</label>
              <select
                name="moodBeforeSleep"
                value={formData.moodBeforeSleep}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Calm">Calm</option>
                <option value="Stressed">Stressed</option>
                <option value="Anxious">Anxious</option>
                <option value="Excited">Excited</option>
                <option value="Tired">Tired</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Caffeine Intake (cups)</label>
              <input
                type="number"
                name="caffeineIntake"
                value={formData.caffeineIntake}
                onChange={handleChange}
                min="0"
                step="0.5"
              />
            </div>
            <div className="form-group">
              <label>Daily Activity Level</label>
              <select
                name="dailyActivityLevel"
                value={formData.dailyActivityLevel}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Section 5: Advanced Sleep Insights */}
        <div className="form-section">
          <h3>Advanced Sleep Insights</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Chronotype</label>
              <select
                name="chronotype"
                value={formData.chronotype}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Early">Early</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Late">Late</option>
              </select>
            </div>
            <div className="form-group">
              <label>Circadian Rhythm Alignment (%)</label>
              <input
                type="number"
                name="circadianRhythmAlignment"
                value={formData.circadianRhythmAlignment}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
            <div className="form-group">
              <label>Sleep Recovery Index (%)</label>
              <input
                type="number"
                name="sleepRecoveryIndex"
                value={formData.sleepRecoveryIndex}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Any observations or factors affecting sleep?"
          />
        </div>
        
        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate('/dashboard')}
          >
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Save Sleep Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default SleepInputForm;