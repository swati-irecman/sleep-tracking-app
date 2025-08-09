import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SleepInputForm.css';

const Questionnaire: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    sleepQuality: '',
    bedtime: '',
    wakeTime: '',
    wokeUpAtNight: '',
    totalHoursSlept: '',
    feltRested: '',
    hadDreams: '',
    usedSleepAids: '',
    comfortableTemp: '',
    overallRating: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Questionnaire submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="questionnaire-container">
      <h2>Daily Sleep Questionnaire</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>How was your sleep yesterday?</label>
          <textarea
            name="sleepQuality"
            value={formData.sleepQuality}
            onChange={handleChange}
            rows={2}
          />
        </div>

        <div className="form-group">
          <label>What time did you go to bed last night?</label>
          <input
            type="time"
            name="bedtime"
            value={formData.bedtime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>When did you get out of bed this morning?</label>
          <input
            type="time"
            name="wakeTime"
            value={formData.wakeTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Did you wake up during the night?</label>
          <select
            name="wokeUpAtNight"
            value={formData.wokeUpAtNight}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>How many hours did you sleep?</label>
          <input
            type="number"
            name="totalHoursSlept"
            value={formData.totalHoursSlept}
            onChange={handleChange}
            min="0"
            step="0.5"
          />
        </div>

        <div className="form-group">
          <label>Did you feel rested this morning?</label>
          <select
            name="feltRested"
            value={formData.feltRested}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Did you have any dreams?</label>
          <select
            name="hadDreams"
            value={formData.hadDreams}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Did you use any sleep aids?</label>
          <input
            type="text"
            name="usedSleepAids"
            value={formData.usedSleepAids}
            onChange={handleChange}
            placeholder="If yes, specify"
          />
        </div>

        <div className="form-group">
          <label>Was your room temperature comfortable?</label>
          <select
            name="comfortableTemp"
            value={formData.comfortableTemp}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>How would you rate your overall sleep? (0-10)</label>
          <input
            type="number"
            name="overallRating"
            value={formData.overallRating}
            onChange={handleChange}
            min="0"
            max="10"
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
          <button type="submit" className="submit-btn" >
            Save Answers
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
