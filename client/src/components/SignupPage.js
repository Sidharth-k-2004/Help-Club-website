import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './LoginPage.css';  // Import CSS for styling

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Make API call to signup
    try {
      const response = await fetch('http://localhost:5000/signup', {  // Adjusted the route to '/api/signup'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Signup successful! Redirecting...'); // Display success message
        setTimeout(() => {
          navigate('/');  // Navigate to home page after signup
        }, 1500);  // Delay navigation for 1.5 seconds to show the message
      } else {
        setMessage(data.message);  // Display error message from server
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      {/* Logo on top left */}
      <div className="logo">
        <img src="Images/Help-Logo.jpg" alt="Logo" />
        <h5>Pes University</h5>
      </div>

      {/* Vertical image of hand on the right side */}
      <div className="hand-image">
        <img src="Images/Hand.jpg" alt="Hand Image" />
      </div>

      {/* Center container with yellow background */}
      <div className="container">
        <h2 className="login-heading">Create an Account</h2>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Signup</button>

          <div className="signup">
            Already have an account? <a href="#">Login</a>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
