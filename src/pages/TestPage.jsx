import React, { useState, useEffect } from 'react';
import { Card, Button, Timer } from '../components/UI';
import { saveTestResult } from '../firebase/services';

const TestPage = ({ userId, questions, category, subCategory, limit = 20, onFinish }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [testQuestions, setTestQuestions] = useState([]);
  const [userChoices, setUserChoices] = useState([]);

  useEffect(() => {
    // Select questions based on category and chapter
    const filtered = questions.filter(q => {
      if (category === 'full') return true;
      if (category === 'chapter') {
        return subCategory ? q.chapter === subCategory : q.type === 'chapter';
      }
      return q.type === category;
    });
    
    let shuffled;
    if (category === 'daily') {
      // Deterministic sort based on date to keep it same for all users on a given day
      const dailySeed = new Date().toISOString().split('T')[0];
      const getHash = (s) => s.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
      
      shuffled = [...filtered].sort((a, b) => {
        const hashA = getHash(a.question + dailySeed);
        const hashB = getHash(b.question + dailySeed);
        return hashA - hashB;
      }).slice(0, limit || 20);
    } else {
      // Randomize for other test types
      shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, limit);
    }
    
    setTestQuestions(shuffled);
  }, [questions, category, subCategory, limit]);

  const handleNext = () => {
    const currentQuestion = testQuestions[currentIdx];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    // Record choice
    const choiceData = {
      question: currentQuestion.question,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer,
      userAnswer: selectedOption,
      isCorrect
    };
    
    setUserChoices(prev => [...prev, choiceData]);

    if (isCorrect) {
      setScore(prev => prev + 10);
      setCorrectCount(prev => prev + 1);
    }

    if (currentIdx + 1 < testQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
    } else {
      finishTest(choiceData); // Pass last choice to finish
    }
  };

  const finishTest = async (lastChoice) => {
    setIsFinished(true);
    
    const finalChoices = [...userChoices, lastChoice];
    const finalScore = score + (lastChoice.isCorrect ? 10 : 0);
    const finalCorrect = correctCount + (lastChoice.isCorrect ? 1 : 0);
    
    await saveTestResult(userId, finalScore, finalCorrect, testQuestions.length, category);
    onFinish(finalScore, finalCorrect, testQuestions.length, finalChoices);
  };

  if (testQuestions.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h3>Loading questions...</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Category: {category}<br/>
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

  return (
    <div className="fade-in" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Q {currentIdx + 1}/{testQuestions.length}</span>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{category.toUpperCase()} TEST</span>
      </div>

      <Timer 
        key={currentIdx} 
        duration={30} 
        onTimeUp={handleNext} 
        isActive={!isFinished} 
      />

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
