import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Log&Sig.css';
import login_img from './login-img.jpg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Userlogin', { email, password });
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            console.log('Login successful', response.data);

            if (response.data.status === "success") {
                setIsLoggedIn(true);
                setShowWelcome(true);
                setTimeout(() => {
                    navigate("/home");
                    setShowWelcome(false);
                }, 1000);
            }
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className={`login ${isLoggedIn ? 'logged-in' : ''}`}>
            <div className="content-log">
                <div className="form">
                    <h2 className='text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder='Email'
                                autoComplete='off'
                                name='email'
                                required
                                className='form-control rounded-0'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder='Password'
                                autoComplete='off'
                                required
                                name='password'
                                className='form-control rounded-0'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="login-btn">
                            <button type='submit' className='btn btn-success border w-100 bg-primary'>Login</button>
                        </div>
                    </form>
                    <Link to="/"> 
                        <p>Do not have an account?</p>
                    </Link>
                    <Link to="/" className=' '>Sign up</Link>
                    {error && <p className='err'>{error}</p>}
                </div>
                <div className="login-img">
                    <img src={login_img} alt="Login illustration" />
                </div>
            </div>
            {showWelcome && <p className='welcome-message'>Welcome!</p>}
        </div>
    );
}

export default Login;
