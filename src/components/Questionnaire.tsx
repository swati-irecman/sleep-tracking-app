import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questionnaire.css';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Questionnaire submitted:', formData);

    // Save to localStorage instead of API/database
    localStorage.setItem('sleepData', JSON.stringify(formData));

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

        {/* Yes/No Radio Options */}
        <div className="form-group">
          <label>Did you wake up during the night?</label>
          <div>
            <label>
              <input
                type="radio"
                name="wokeUpAtNight"
                value="Yes"
                checked={formData.wokeUpAtNight === 'Yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="wokeUpAtNight"
                value="No"
                checked={formData.wokeUpAtNight === 'No'}
                onChange={handleChange}
              /> No
            </label>
          </div>
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
          <div>
            <label>
              <input
                type="radio"
                name="feltRested"
                value="Yes"
                checked={formData.feltRested === 'Yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="feltRested"
                value="No"
                checked={formData.feltRested === 'No'}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Did you have any dreams?</label>
          <div>
            <label>
              <input
                type="radio"
                name="hadDreams"
                value="Yes"
                checked={formData.hadDreams === 'Yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="hadDreams"
                value="No"
                checked={formData.hadDreams === 'No'}
                onChange={handleChange}
              /> No
            </label>
          </div>
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
          <div>
            <label>
              <input
                type="radio"
                name="comfortableTemp"
                value="Yes"
                checked={formData.comfortableTemp === 'Yes'}
                onChange={handleChange}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="comfortableTemp"
                value="No"
                checked={formData.comfortableTemp === 'No'}
                onChange={handleChange}
              /> No
            </label>
          </div>
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
          <button type="submit" className="submit-btn">
            Save Answers
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
