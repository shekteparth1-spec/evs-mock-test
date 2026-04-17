import React, { useState } from 'react';
import { Card, Button } from '../components/UI';
import { logout } from '../firebase/services';
import { seedData } from '../firebase/setupData';

const Dashboard = ({ user, userProfile, questions = [], onSelectTest, onViewLeaderboard, onViewDailyLeaderboard }) => {
  const dailyUnlocked = true;
  const timeLeft = 'Available anytime!';
  const [viewMode, setViewMode] = useState('main'); // 'main', 'chapters', or 'countSelection'
  const [selectedConfig, setSelectedConfig] = useState(null); // { type, chapter }
  const questionCount = questions.length;

  const uniqueChapters = [...new Set(questions.filter(q => q.chapter).map(q => q.chapter))];

  const handleSelectBasic = (type, chapter = null) => {
    setSelectedConfig({ type, chapter });
    setViewMode('countSelection');
  };

  // Daily test: skip count selection, fixed 75 questions
  const handleDailyTest = () => {
    onSelectTest('daily', null, 75);
  };

  const finalizeSelection = (limit) => {
    onSelectTest(selectedConfig.type, selectedConfig.chapter, limit);
    setViewMode('main');
  };

  if (viewMode === 'countSelection') {
    const countOptions = [10, 15, 20, 25, 30, 35, 40, 50, 60, 70];
    return (
      <div className="fade-in" style={{ padding: '1.5rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Button onClick={() => setViewMode(selectedConfig?.type === 'chapter' ? 'chapters' : 'main')} variant="secondary" style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px' }}>
            ←
          </Button>
          <h2 style={{ margin: 0 }}>Number of Questions</h2>
        </div>
        
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Select how many questions you want for this test (up to 70).
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
          gap: '1rem',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          {countOptions.map(num => (
            <Button 
              key={num} 
              onClick={() => finalizeSelection(num)}
              variant="secondary"
              style={{ 
                padding: '1rem 0.5rem', 
                fontSize: '1.1rem', 
                fontWeight: 'bold',
                border: '2px solid var(--primary-light)'
              }}
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (viewMode === 'chapters') {
    return (
      <div className="fade-in" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Button onClick={() => setViewMode('main')} variant="secondary" style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px' }}>
            ←
          </Button>
          <h2 style={{ margin: 0 }}>Select Chapter</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {uniqueChapters.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No chapters found. Please seed data.</p>
          ) : (
            uniqueChapters.map((chapter, idx) => (
              <Card 
                key={idx} 
                onClick={() => handleSelectBasic('chapter', chapter)}
                style={{ cursor: 'pointer', padding: '1.5rem', borderLeft: '5px solid var(--secondary)' }}
              >
                <h4 style={{ margin: 0 }}>{chapter}</h4>
                <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {questions.filter(q => q.chapter === chapter).length} Questions
                </p>
              </Card>
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ padding: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ margin: 0, color: 'var(--primary)' }}>Hello, {userProfile?.name?.split(' ')[0] || 'Student'}!</h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ready for today's mock test?</p>
        </div>
        <Button variant="secondary" onClick={() => logout()}>Logout</Button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <Card style={{ padding: '1rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0' }}>{userProfile?.totalScore || 0}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Pts</p>
        </Card>
        <Card style={{ padding: '1rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '0' }}>{userProfile?.testsAttempted || 0}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tests Taken</p>
        </Card>
      </div>

      <div style={{ marginBottom: '1.5rem', padding: '0.8rem', background: 'var(--primary-light)', borderRadius: '12px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>
          📋 Questions in Database: {questionCount}
        </p>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Available Tests</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card onClick={() => setViewMode('chapters')} style={{ cursor: 'pointer', borderLeft: '5px solid var(--primary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0 }}>Chapter-wise Tests</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Practice specific topics</p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
          </div>
        </Card>

        <Card 
          onClick={handleDailyTest} 
          style={{ cursor: 'pointer', borderLeft: '5px solid var(--secondary)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0 }}>Daily Mock Test</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                75 Questions · 90 Min Timer
              </p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>🏆</span>
          </div>
        </Card>

        <Card onClick={() => handleSelectBasic('full')} style={{ cursor: 'pointer', borderLeft: '5px solid #333' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0 }}>Full Mock Test</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Timed test with all subjects</p>
            </div>
            <span style={{ fontSize: '1.5rem' }}>📝</span>
          </div>
        </Card>

        <Card onClick={onViewLeaderboard} style={{ cursor: 'pointer', background: 'var(--primary)', color: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>Overall Leaderboard</h4>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
          </div>
        </Card>

        <Card onClick={onViewDailyLeaderboard} style={{ cursor: 'pointer', background: 'var(--secondary)', color: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>Daily Leaderboard</h4>
            <span style={{ fontSize: '1.5rem' }}>🥇</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
