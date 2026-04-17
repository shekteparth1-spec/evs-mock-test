import React, { useState, useEffect } from 'react';

export const Card = ({ children, className = '', onClick, style = {} }) => (
  <div 
    onClick={onClick} 
    className={`glass-card ${className}`} 
    style={style}
  >
    {children}
  </div>
);

export const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => (
  <button 
    onClick={onClick} 
    className={`btn-${variant} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export const Timer = ({ duration, onTimeUp, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      onTimeUp();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  
  return (
    <div style={{ width: '100%', height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
      <div style={{ 
        width: `${percentage}%`, 
        height: '100%', 
        background: timeLeft < 10 ? 'hsl(0, 70%, 50%)' : 'var(--primary)',
        transition: 'width 1s linear'
      }} />
      <div style={{ fontSize: '0.8rem', textAlign: 'right', marginTop: '4px', color: timeLeft < 10 ? 'red' : 'inherit' }}>
        {timeLeft}s remaining
      </div>
    </div>
  );
};
