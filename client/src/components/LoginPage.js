import React from 'react';
import './LoginPage.css';  // Import CSS for styling

function Login() {
  return (
    <div className="login-page">
      {/* Logo on top left */}
      <div className="logo" >
        <img src="Images/Help-Logo.jpg" alt="Logo" />
        {/* <img src="Images/Pes-Logo.jpeg" alt="Logo" /> */}
        
        <h5>Pes University</h5>
      </div>

      {/* Vertical image of hand on the right side */}
      <div className="hand-image">
        <img src="Images/Hand.jpg" alt="Hand Image" />
      </div>

      {/* Center container with yellow background */}
      <div className="container">
        <h2 className="login-heading">Login to Your Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
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
