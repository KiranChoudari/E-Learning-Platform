import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginsignup.css';
import { login_path, signup_path } from "../path";  // Make sure paths are set correctly

const Loginsignup = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupOccupation, setSignupOccupation] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await fetch(login_path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userId', data.student_id);
        localStorage.setItem('email', loginEmail);
        alert('Login successful!');
        navigate('/home');  // Redirect to Home page after successful login
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message || 'Login failed');
      }
    } catch (error) {
      setLoginError('An error occurred while logging in. Please try again.');
      console.error('Login error:', error);
    }
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError('');

    if (signupPassword !== signupConfirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(signup_path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword,
          name: signupName,
          occupation: signupOccupation,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userId', data.student_id);
        localStorage.setItem('email', signupEmail);
        alert('Signup successful!');
        navigate('/home');  // Redirect to Home page after successful signup
      } else {
        const errorData = await response.json();
        setSignupError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      setSignupError('An error occurred while signing up. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignup}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            name="txt"
            placeholder="User name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={signupOccupation}
            onChange={(e) => setSignupOccupation(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={signupConfirmPassword}
            onChange={(e) => setSignupConfirmPassword(e.target.value)}
            required
          />
          {signupError && <p className="error">{signupError}</p>}
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          {loginError && <p className="error">{loginError}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Loginsignup;
