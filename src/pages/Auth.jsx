import React, { useState } from 'react';
import { signup, login } from '../firebase/services';
import { Card, Button } from '../components/UI';

const Auth = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      onAuthSuccess();
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please check your credentials or Sign Up if you are new.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please Log In instead.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fade-in" style={{ padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>TestNova</h1>
        <p style={{ color: 'var(--text-muted)' }}>Environmental Education & Sustainability</p>
      </div>

      <Card>
        <h2 style={{ textAlign: 'center' }}>{isLogin ? 'Welcome Back' : 'Join the Movement'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</p>}
          
          <Button disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
          </Button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default Auth;
