// src/components/InteractiveForm.js
import { useState } from 'react';
import styles from './InteractiveForm.module.css';

const InteractiveForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(value.length >= 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`Submitted: ${inputValue}`);
    }
  };

  return (
    <div className={styles.formContainer}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type at least 3 characters..." 
        className={styles.inputField}
      />
      <button 
      onClick={handleSubmit}
        className={isValid ? styles.activeButton : styles.inactiveButton}
        disabled={!isValid}
      >
        Submit
      </button>
    </div>
  );
};

export default InteractiveForm;
