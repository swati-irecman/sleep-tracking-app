import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BeforeSleepingQuestions.css';

const BeforeSleepingQuestions: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bedtime: '',
    deviceUse: '',
    physicalTiredness: '',
    exercisedToday: '',
    hoursAfterWorkout: '',
    physicalTension: '',
    stressLevel: '',
    anxietyLevel: '',
    roomTemp: '',
    noiseLevel: '',
    sleepingPosition: '',
    caffeine: '',
    heavyMeal: '',
    expectedSleepQuality: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Before Sleeping Questionnaire submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="questionnaire-container">
      <h2>Before Sleeping Questionnaire</h2>
      <form onSubmit={handleSubmit}>

        {/* Bedtime */}
        <div className="form-group">
          <label>What time are you going to bed?</label>
          <input
            type="time"
            name="bedtime"
            value={formData.bedtime}
            onChange={handleChange}
          />
        </div>

        {/* Device use */}
        <div className="form-group">
          <label>Did you use an electronic device in the last 30 minutes before bed?</label>
          <label><input type="radio" name="deviceUse" value="Yes" onChange={handleChange}/> Yes</label>
          <label><input type="radio" name="deviceUse" value="No" onChange={handleChange}/> No</label>
        </div>

        {/* Physical tiredness */}
        <div className="form-group">
          <label>Are you feeling physically tired right now? (1–5)</label>
          {[1,2,3,4,5].map(num => (
            <label key={num}>
              <input type="radio" name="physicalTiredness" value={String(num)} onChange={handleChange}/> {num}
            </label>
          ))}
        </div>

        {/* Exercise */}
        <div className="form-group">
          <label>Did you exercise today?</label>
          <label><input type="radio" name="exercisedToday" value="Yes" onChange={handleChange}/> Yes</label>
          <label><input type="radio" name="exercisedToday" value="No" onChange={handleChange}/> No</label>
        </div>

        {/* Hours after workout */}
        {formData.exercisedToday === 'Yes' && (
          <div className="form-group">
            <label>If yes, how many hours before bed was your last workout?</label>
            <input
              type="number"
              name="hoursAfterWorkout"
              value={formData.hoursAfterWorkout}
              onChange={handleChange}
              min="0"
            />
          </div>
        )}

        {/* Physical tension */}
        <div className="form-group">
          <label>Do you feel physically tense or relaxed?</label>
          {['Relaxed','Slightly Tense','Very Tense'].map(option => (
            <label key={option}>
              <input type="radio" name="physicalTension" value={option} onChange={handleChange}/> {option}
            </label>
          ))}
        </div>

        {/* Stress level */}
        <div className="form-group">
          <label>How stressed are you feeling right now? (1–5)</label>
          {[1,2,3,4,5].map(num => (
            <label key={num}>
              <input type="radio" name="stressLevel" value={String(num)} onChange={handleChange}/> {num}
            </label>
          ))}
        </div>

        {/* Anxiety level */}
        <div className="form-group">
          <label>How anxious are you feeling right now? (1–5)</label>
          {[1,2,3,4,5].map(num => (
            <label key={num}>
              <input type="radio" name="anxietyLevel" value={String(num)} onChange={handleChange}/> {num}
            </label>
          ))}
        </div>

        {/* Room temperature */}
        <div className="form-group">
          <label>What’s your bedroom temperature?</label>
          {['Cold','Cool','Comfortable','Warm','Hot'].map(option => (
            <label key={option}>
              <input type="radio" name="roomTemp" value={option} onChange={handleChange}/> {option}
            </label>
          ))}
        </div>

        {/* Noise level */}
        <div className="form-group">
          <label>Is there any noise in your environment right now?</label>
          {['None','Soft','Moderate','Loud'].map(option => (
            <label key={option}>
              <input type="radio" name="noiseLevel" value={option} onChange={handleChange}/> {option}
            </label>
          ))}
        </div>

        {/* Sleeping position */}
        <div className="form-group">
          <label>What is your sleeping position when you’re trying to fall asleep?</label>
          {['Back','Side','Stomach'].map(option => (
            <label key={option}>
              <input type="radio" name="sleepingPosition" value={option} onChange={handleChange}/> {option}
            </label>
          ))}
        </div>

        {/* Caffeine */}
        <div className="form-group">
          <label>Did you consume caffeine within the last 6 hours?</label>
          <label><input type="radio" name="caffeine" value="Yes" onChange={handleChange}/> Yes</label>
          <label><input type="radio" name="caffeine" value="No" onChange={handleChange}/> No</label>
        </div>

        {/* Heavy meal */}
        <div className="form-group">
          <label>Did you eat a heavy meal within the last 3 hours?</label>
          <label><input type="radio" name="heavyMeal" value="Yes" onChange={handleChange}/> Yes</label>
          <label><input type="radio" name="heavyMeal" value="No" onChange={handleChange}/> No</label>
        </div>

        {/* Expected sleep quality */}
        <div className="form-group">
          <label>How well do you expect to sleep tonight?</label>
          {['Very Poor','Poor','Average','Good','Excellent'].map(option => (
            <label key={option}>
              <input type="radio" name="expectedSleepQuality" value={option} onChange={handleChange}/> {option}
            </label>
          ))}
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate('/dashboard')}
          >
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Save Answers
          </button>
        </div>

      </form>
    </div>
  );
};

export default BeforeSleepingQuestions;
