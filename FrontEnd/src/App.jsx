import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Sidebar from "./Component/Navbar/SideBar.jsx";
import Signup from './Component/SignUp&Login/Signup.jsx';
import Login from './Component/SignUp&Login/Login.jsx';
import MainHome from './Component/Home/MainHome.jsx';
import Home from './Component/Home/Home.jsx';
import AddCart from './Component/AddCart/AddCart.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/home' && <Sidebar />}     

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/foods" element={<MainHome />} />
        <Route path='/addCart' element={<AddCart />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
