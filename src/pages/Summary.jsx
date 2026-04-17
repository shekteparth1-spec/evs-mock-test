import React, { useState } from 'react';
import { Card, Button } from '../components/UI';

export const Result = ({ score, correct, total, reviewData = [], subCategory, onBack }) => {
  const percentage = (correct / total) * 100;
  const [showReview, setShowReview] = useState(false);
  
  return (
    <div className="fade-in" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Test Complete!</h1>
      {subCategory && (
        <p style={{ margin: '-0.5rem 0 1rem', fontSize: '1rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
          {subCategory}
        </p>
      )}
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Here's how you performed</p>
      
      <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 2rem' }}>
        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
          <text x="18" y="20.35" style={{ fontSize: '8px', textAnchor: 'middle', fontWeight: 'bold' }}>{Math.round(percentage)}%</text>
        </svg>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <Card>
          <h3 style={{ margin: 0, color: 'var(--primary)' }}>{correct}</h3>
          <p style={{ margin: 0, fontSize: '0.8rem' }}>Correct</p>
        </Card>
        <Card>
          <h3 style={{ margin: 0, color: 'red' }}>{total - correct}</h3>
          <p style={{ margin: 0, fontSize: '0.8rem' }}>Wrong</p>
        </Card>
      </div>

      <Card style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: 0 }}>Total Points Earned</h4>
        <h2 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--secondary)' }}>+{score}</h2>
      </Card>

      {!showReview ? (
        <Button 
          onClick={() => setShowReview(true)} 
          variant="secondary" 
          style={{ width: '100%', padding: '1.2rem', marginBottom: '1rem' }}
        >
          🔍 Review Your Answers
        </Button>
      ) : (
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Answer Review</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {reviewData.map((item, idx) => (
              <Card key={idx} style={{ padding: '1rem', borderLeft: `5px solid ${item.isCorrect ? '#22c55e' : '#ef4444'}` }}>
                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{idx + 1}. {item.question}</p>
                <div style={{ fontSize: '0.85rem' }}>
                  <p style={{ margin: '4px 0', color: item.isCorrect ? '#16a34a' : '#dc2626' }}>
                    <strong>Your Answer:</strong> {item.options[item.userAnswer]}
                  </p>
                  {!item.isCorrect && (
                    <p style={{ margin: '4px 0', color: '#16a34a' }}>
                      <strong>Correct Answer:</strong> {item.options[item.correctAnswer]}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <Button 
            onClick={() => setShowReview(false)} 
            variant="secondary" 
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Hide Review
          </Button>
        </div>
      )}

      <Button onClick={onBack} style={{ width: '100%', padding: '1.2rem' }}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export const Leaderboard = ({ scores, onBack }) => {
  return (
    <div className="fade-in" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Button onClick={onBack} variant="secondary" style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px' }}>
          ←
        </Button>
        <h2 style={{ margin: 0 }}>Overall Leaderboard</h2>
      </div>

      <Card style={{ padding: '0', overflow: 'hidden' }}>
        {scores.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>No records yet</div>
        ) : (
          scores.map((user, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1.2rem', 
                gap: '1rem',
                borderBottom: idx === scores.length - 1 ? 'none' : '1px solid #f0f0f0',
                background: idx === 0 ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
              }}
            >
              <div style={{ 
                width: '30px', 
                height: '30px', 
                borderRadius: '50%', 
                background: idx === 0 ? '#ffd700' : idx === 1 ? '#c0c0c0' : idx === 2 ? '#cd7f32' : 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: idx < 3 ? 'white' : 'var(--primary)',
                fontSize: '0.9rem'
              }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{user.name}</h4>
                <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--text-muted)' }}>{user.testsAttempted} tests taken</p>
              </div>
              <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                {user.totalScore} pts
              </div>
            </div>
          ))
        )}
      </Card>
    </div>
  );
};

export const DailyLeaderboard = ({ scores, onBack }) => {
  const formatTime = (secs) => {
    if (!secs) return '--';
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="fade-in" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
        <Button onClick={onBack} variant="secondary" style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px' }}>
          ←
        </Button>
        <h2 style={{ margin: 0 }}>🥇 Daily Leaderboard</h2>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
        Today's Daily Mock Test (75 Questions)
      </p>

      <Card style={{ padding: '0', overflow: 'hidden' }}>
        {scores.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No one has completed today's daily test yet!
          </div>
        ) : (
          scores.map((entry, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1rem 1.2rem', 
                gap: '1rem',
                borderBottom: idx === scores.length - 1 ? 'none' : '1px solid #f0f0f0',
                background: idx === 0 ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
              }}
            >
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: idx === 0 ? '#ffd700' : idx === 1 ? '#c0c0c0' : idx === 2 ? '#cd7f32' : 'var(--primary-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold',
                color: idx < 3 ? 'white' : 'var(--primary)',
                fontSize: '0.9rem'
              }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{entry.userName}</h4>
                <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {entry.correct}/{entry.total} correct · ⏱ {formatTime(entry.timeTaken)}
                </p>
              </div>
              <div style={{ fontWeight: 'bold', color: 'var(--secondary)', fontSize: '1rem' }}>
                {entry.score} pts
              </div>
            </div>
          ))
        )}
      </Card>
    </div>
  );
};

