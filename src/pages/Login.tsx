import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { mockEquipment } from '../data/mockData';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState<number | null>(null);
  
  const { login, error, isLoading, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Check if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Password strength check (basic version)
  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setFormError('');
    
    // Check if account is locked
    if (isLocked) {
      setFormError('Too many failed attempts. Please try again later.');
      return;
    }
    
    // Validate form inputs
    if (!email) {
      setFormError('Please enter your email address.');
      return;
    }
    
    if (!validateEmail(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    
    if (!password) {
      setFormError('Please enter your password.');
      return;
    }
    
    if (!validatePassword(password)) {
      setFormError('Password should be at least 8 characters long.');
      return;
    }
    
    try {
      await login({ email, password });
      
      // If login is successful, reset attempt count
      setAttemptCount(0);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      // Increment failed attempt count
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      
      // Lock account after 5 failed attempts
      if (newAttemptCount >= 5) {
        setIsLocked(true);
        
        // Unlock after 30 minutes
        const timer = window.setTimeout(() => {
          setIsLocked(false);
          setAttemptCount(0);
          setLockTimer(null);
        }, 30 * 60 * 1000);
        
        setLockTimer(timer);
        setFormError('Too many failed attempts. Account locked for 30 minutes.');
      }
    }
  };
  
  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (lockTimer) {
        clearTimeout(lockTimer);
      }
    };
  }, [lockTimer]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Equipment Maintenance System</h1>
          <p className="text-gray-600 mt-2">Log in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {(formError || error) && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {formError || error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
              disabled={isLocked || isLoading}
              aria-invalid={!!formError}
              aria-describedby={formError ? "email-error" : undefined}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
              disabled={isLocked || isLoading}
              aria-invalid={!!formError}
              aria-describedby={formError ? "password-error" : undefined}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || isLocked}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-blue-300"
          >
            {isLoading ? 'Logging in...' : isLocked ? 'Account Locked' : 'Log In'}
          </button>
          
          {attemptCount > 0 && attemptCount < 5 && (
            <p className="mt-2 text-xs text-red-600">
              Failed login attempts: {attemptCount}/5
            </p>
          )}
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register your organization
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 