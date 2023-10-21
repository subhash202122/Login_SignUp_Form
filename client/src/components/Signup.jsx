import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile:'',
    age:'',
    gender:'',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://login-signup2-i8vx.onrender.com/api/users/register', formData);
      if (response.status === 201) {
        setMessage('Signup successful. You can now log in.');
        //setMessage('Signup failed. Please check your data.');
      }
    } catch (error) {
      // Handle network errors, validation errors, or other issues
      setMessage('Signup failed. Please try again later.');
    }
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="mobile"
            name="mobile"
            placeholder="Mobile"
            required
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="age"
            name="age"
            placeholder="Age"
            required
            value={formData.age}
            onChange={handleInputChange}
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="gender"
            name="gender"
            placeholder="Gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">
          Signup
        </button>
        <div className="register-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
export default Signup;
