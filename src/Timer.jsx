import React, { useState, useEffect } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);        // First state of time
  const [isRunning, setIsRunning] = useState(false); // indicates if the timer works

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);           // to start time
  const handlePauseResume = () => setIsRunning(!isRunning); // to pause/coutinue
  const handleReset = () => {                              // to update
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Timer: {time}s</h1>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handlePauseResume} disabled={time === 0}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
      <button onClick={handleReset} disabled={time === 0}>Reset</button>
    </div>
  );
}

export default Timer;
