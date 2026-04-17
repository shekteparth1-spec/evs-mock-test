import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { getUserProfile, getQuestions, getLeaderboard, getDailyLeaderboard } from './firebase/services';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import TestPage from './pages/TestPage';
import { Result, Leaderboard, DailyLeaderboard } from './pages/Summary';
import { Footer } from './components/UI';

function App() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [view, setView] = useState('loading'); // auth, dashboard, test, result, leaderboard, dailyLeaderboard
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [testLimit, setTestLimit] = useState(20);
  const [lastResult, setLastResult] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [dailyLeaderboardData, setDailyLeaderboardData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        const profile = await getUserProfile(u.uid);
        setUserProfile(profile);
        
        try {
          const qs = await getQuestions();
          console.log("Fetched questions:", qs.length);
          setQuestions(qs);
          
          // Auto-seed in background to ensure all questions are up-to-date
          import('./firebase/setupData').then(({ seedData }) => seedData());
        } catch (err) {
          console.error("Error fetching questions:", err);
        }
        
        setView('dashboard');
      } else {
        setUser(null);
        setUserProfile(null);
        setView('auth');
      }
    });
    return () => unsubscribe();
  }, []);

  const refreshProfile = async () => {
    if (user) {
      const profile = await getUserProfile(user.uid);
      setUserProfile(profile);
    }
  };

  const handleStartTest = (category, subCategory = null, limit = 20) => {
    setSelectedCategory(category);
    setSelectedChapter(subCategory);
    setTestLimit(limit);
    setView('test');
  };

  const handleFinishTest = (score, correct, total, reviewData, isDailyTest = false) => {
    setLastResult({ score, correct, total, reviewData, subCategory: selectedChapter, isDailyTest });
    refreshProfile();
    setView('result');
  };

  const handleViewLeaderboard = async () => {
    const data = await getLeaderboard();
    setLeaderboardData(data);
    setView('leaderboard');
  };

  const handleViewDailyLeaderboard = async () => {
    const data = await getDailyLeaderboard();
    setDailyLeaderboardData(data);
    setView('dailyLeaderboard');
  };

  if (view === 'loading') {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>Loading...</div>;
  }

  return (
    <div className="App" style={{ paddingBottom: '50px' }}>
      {view === 'auth' && <Auth onAuthSuccess={refreshProfile} />}
      
      {view === 'dashboard' && (
        <Dashboard 
          user={user} 
          userProfile={userProfile} 
          questions={questions}
          onSelectTest={handleStartTest}
          onViewLeaderboard={handleViewLeaderboard}
          onViewDailyLeaderboard={handleViewDailyLeaderboard}
        />
      )}

      {view === 'test' && (
        <TestPage 
          userId={user.uid}
          userName={userProfile?.name || 'Anonymous'}
          questions={questions}
          category={selectedCategory}
          subCategory={selectedChapter}
          limit={testLimit}
          onFinish={handleFinishTest}
        />
      )}

      {view === 'result' && (
        <Result 
          {...lastResult}
          onBack={() => setView('dashboard')}
          onViewDailyLeaderboard={handleViewDailyLeaderboard}
        />
      )}

      {view === 'leaderboard' && (
        <Leaderboard 
          scores={leaderboardData}
          onBack={() => setView('dashboard')}
        />
      )}

      {view === 'dailyLeaderboard' && (
        <DailyLeaderboard
          scores={dailyLeaderboardData}
          onBack={() => setView('dashboard')}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
