import { React, useState, useEffect } from 'react';
import './../styles/Countdown.css';

const Countdown = () => {
  const [value, setValue] = useState('');
  const [seconds, setSeconds] = useState('');
  const message = `"Time was meaningless, except each moment was a countdown to the end." Lisa Henry`;

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(timer);
        setSeconds('');
        alert(message);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeconds(value);
    setValue('');
  };

  return (
    <>
      <div className="content">
        <h2>Countdown</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              id="countdown_seconds"
              type="number"
              min="1"
              pattern="[0-9]"
              name="countdown_seconds"
              placeholder="Type hier het aantal seconden in..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
              required
            />
            <button type="submit" id="custom-button">
              Start !
            </button>
          </form>
        </div>
        <div className="counter-display">{seconds > 0 ? <h1>{seconds}s</h1> : null}</div>
      </div>
    </>
  );
};

export default Countdown;
