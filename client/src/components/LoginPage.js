import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './LoginPage.css';  // Import CSS for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Make API call to login
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Navigate to StudentQuery on successful login
        navigate('/studentquery'); // Update this path based on your routing
      } else {
        setMessage(data.message);
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
        <h2 className="login-heading">Login to Your Account</h2>
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

          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="signup">
            Do not have an account? <a href="#">Signup</a>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
