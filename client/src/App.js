import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/LoginPage';  
import Signup from './components/SignupPage';
import StudentQueryPage from './components/Student';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/studentquery" element={<StudentQueryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
