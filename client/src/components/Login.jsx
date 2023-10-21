import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "https://login-signup2-i8vx.onrender.com/api/users/login",
        formData
      );
      console.log(formData);
      if (response.status === 200) {
        // Login successful
        setMessage("Login successful. Redirecting to your profile...");
         localStorage.setItem("user",JSON.stringify(response.data.user));
        console.log(response.data.user);
        // Redirect to the user's profile page or set a user session
        navigate("/profile");
      } else {
        // Handle login error
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle network errors, validation errors, or other issues
      setMessage("Login failed. Please try again later.");
    }
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <i className="bx bxs-user"></i>
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
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
export default Login;
