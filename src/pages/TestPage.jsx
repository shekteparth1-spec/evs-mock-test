import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Timer } from '../components/UI';
import { saveTestResult, saveDailyResult } from '../firebase/services';

const DAILY_TOTAL_SECONDS = 90 * 60; // 90 minutes for daily test

const TestPage = ({ userId, userName, questions, category, subCategory, limit = 20, onFinish }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [testQuestions, setTestQuestions] = useState([]);
  const [userChoices, setUserChoices] = useState([]);

  // Overall timer for daily test
  const [dailyTimeLeft, setDailyTimeLeft] = useState(DAILY_TOTAL_SECONDS);
  const dailyTimerRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const isDailyTest = category === 'daily';

  useEffect(() => {
    const filtered = questions.filter(q => {
      if (category === 'full') return true;
      if (category === 'daily') return true;
      if (category === 'chapter') {
        return subCategory ? q.chapter === subCategory : q.type === 'chapter';
      }
      return q.type === category;
    });

    let shuffled;
    if (category === 'daily') {
      // Deterministic sort based on date — same questions for all users today
      const dailySeed = new Date().toISOString().split('T')[0];
      const getHash = (s) => s.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
      shuffled = [...filtered].sort((a, b) => {
        return getHash(a.question + dailySeed) - getHash(b.question + dailySeed);
      }).slice(0, 75); // Fixed 75 questions for daily
    } else {
      shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, limit);
    }

    setTestQuestions(shuffled);
    startTimeRef.current = Date.now();
  }, [questions, category, subCategory, limit]);

  // Overall countdown timer for daily test
  useEffect(() => {
    if (!isDailyTest || testQuestions.length === 0 || isFinished) return;

    dailyTimerRef.current = setInterval(() => {
      setDailyTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(dailyTimerRef.current);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(dailyTimerRef.current);
  }, [isDailyTest, testQuestions.length, isFinished]);

  const handleTimeUp = () => {
    // Auto-finish when overall timer runs out
    setIsFinished(true);
    const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000);
    saveTestResult(userId, score, correctCount, testQuestions.length, category);
    saveDailyResult(userId, userName || 'Anonymous', score, correctCount, testQuestions.length, timeTaken);
    onFinish(score, correctCount, testQuestions.length, userChoices, true);
  };

  const handleNext = () => {
    const currentQuestion = testQuestions[currentIdx];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    const choiceData = {
      question: currentQuestion.question,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer,
      userAnswer: selectedOption,
      isCorrect
    };

    const newChoices = [...userChoices, choiceData];
    setUserChoices(newChoices);

    const newScore = score + (isCorrect ? 10 : 0);
    const newCorrect = correctCount + (isCorrect ? 1 : 0);
    if (isCorrect) {
      setScore(newScore);
      setCorrectCount(newCorrect);
    }

    if (currentIdx + 1 < testQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
    } else {
      finishTest(choiceData, newScore, newCorrect, newChoices);
    }
  };

  const finishTest = async (lastChoice, finalScore, finalCorrect, finalChoices) => {
    clearInterval(dailyTimerRef.current);
    setIsFinished(true);
    const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000);

    await saveTestResult(userId, finalScore, finalCorrect, testQuestions.length, category);

    if (isDailyTest) {
      await saveDailyResult(userId, userName || 'Anonymous', finalScore, finalCorrect, testQuestions.length, timeTaken);
    }

    onFinish(finalScore, finalCorrect, testQuestions.length, finalChoices, isDailyTest);
  };

  // Format seconds to MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (testQuestions.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h3>Loading questions...</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Category: {category}<br />
          Total Questions Available: {questions.length}
        </p>
        <Button onClick={() => window.location.reload()} style={{ marginTop: '1rem' }}>
          🔄 Retry / Refresh
        </Button>
      </div>
    );
  }

  if (isFinished) return <div style={{ padding: '2rem' }}>Saving results...</div>;

  const currentQuestion = testQuestions[currentIdx];
  const isLowTime = isDailyTest && dailyTimeLeft < 300; // < 5 minutes

  return (
    <div className="fade-in" style={{ padding: '1.5rem' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Q {currentIdx + 1}/{testQuestions.length}</span>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{category.toUpperCase()} TEST</span>
      </div>

      {/* Overall timer badge for daily test */}
      {isDailyTest && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          padding: '0.6rem 1rem',
          borderRadius: '12px',
          background: isLowTime ? 'hsl(0, 80%, 95%)' : 'var(--primary-light)',
          border: `2px solid ${isLowTime ? 'hsl(0,70%,50%)' : 'var(--primary)'}`,
          fontWeight: 'bold',
          fontSize: '1.1rem',
          color: isLowTime ? 'hsl(0,70%,40%)' : 'var(--primary)',
          transition: 'all 0.3s'
        }}>
          ⏱️ Time Left: {formatTime(dailyTimeLeft)}
        </div>
      )}

      {/* Per-question timer for non-daily tests */}
      {!isDailyTest && (
        <Timer
          key={currentIdx}
          duration={30}
          onTimeUp={handleNext}
          isActive={!isFinished}
        />
      )}

      <Card style={{ marginBottom: '2rem', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h3 style={{ margin: 0 }}>{currentQuestion.question}</h3>
      </Card>

      <div style={{ marginBottom: '2rem' }}>
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn ${selectedOption === idx ? 'selected' : ''}`}
            onClick={() => setSelectedOption(idx)}
          >
            {option}
          </button>
        ))}
      </div>

      <Button
        onClick={handleNext}
        disabled={selectedOption === null}
        style={{ width: '100%', padding: '1.2rem' }}
      >
        {currentIdx + 1 === testQuestions.length ? 'Finish Test' : 'Next Question'}
      </Button>
    </div>
  );
};

export default TestPage;
