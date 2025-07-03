import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ expireAt, label }) => {
  const calculateRemainingSeconds = () => {
    const expireTime = new Date(expireAt).getTime();
    const now = new Date().getTime();
    return Math.max(Math.floor((expireTime - now) / 1000), 0);
  };

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const [remaining, setRemaining] = useState(calculateRemainingSeconds());
  const intervalRef = useRef(null);

  useEffect(() => {
    if (remaining <= 0) return;

    intervalRef.current = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-white text-gray-800 rounded-xl shadow p-3 w-full max-w-xs mx-auto mb-4">
      <div className="text-sm font-medium mb-1">{label}</div>
      <div className="text-center text-xl font-semibold tracking-widest">
        {formatTime(remaining)}
      </div>
      {remaining === 0 && (
        <p className="text-red-500 text-xs text-center mt-1">⏰ Time's up!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
