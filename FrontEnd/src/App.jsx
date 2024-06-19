import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import User from './UserAdmin_path/User';
import Admin from './UserAdmin_path/Admin';

function App() {
  return (
    <Router>
      <div className="main-app">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
