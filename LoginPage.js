import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authenticate } from './authService';
import './LoginPage.css';

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employeeId && password) {
      const user = authenticate(employeeId, password);

      if (user) {
        console.log('Login successful', user.username);
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } else {
      setError('Both fields are required');
    }
  };

  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">{/* BG Image */}</div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header>
                <h3>LOGIN</h3>
              </header>
              <div className="error">{error}</div>
              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  id="employeeId"
                  required
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  title="Employee ID should contain only alphabets and numbers"
                />
                <label htmlFor="employeeId">Employee ID</label>
              </div>
              <div className="input-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  id="pass"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  title="Password should contain at least 8 characters including one uppercase letter, one lowercase letter, one digit, and one special character"
                />
                <label htmlFor="pass">Password</label>
                <button
                  type="button"
                  className={`show-password-button ${showPassword ? 'show' : ''}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="input-field">
                <input type="submit" className="submit" value="Sign IN" />
              </div>
              <div className="Forgot">
                <span>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
