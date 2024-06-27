import React, { useState } from "react";
import axios from "axios";
import "./Log&Sig.css";
import { Link, useNavigate } from "react-router-dom";
import sign_img from "./sign-img.jpg";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // New state for animation
  const [error, setError] = useState(''); // New state for error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/Usersign", { name, email, password })
      .then((res) => {
        setIsRegistered(true); // Trigger the animation
        setTimeout(() => {
          navigate("/login");
        }, 1000); // Adjust the timeout to match your animation duration
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setError("Email already exists");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className={`sign ${isRegistered ? 'registered' : ''}`}> {/* Apply the animation class */}
      <div className="content-sign">
        <div className="sign-content">
          <h2 className="text-center">Sign Up</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="name"
                required
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                placeholder="email"
                required
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sign-btn">
              <button type="submit" className="btn btn-success w-100 rounded-2">
                Register
              </button>
            </div>
          </form>
          <Link to={"/login"}>
          <p >Already have an account?</p>
          </Link>
          <Link to={"/login"} className="">
            Login
          </Link>
        </div>
        <div className="sign-img">
          <img src={sign_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
