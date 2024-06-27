import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminSideBar from './Componet/SideBarAdmin/ADminSideBar';
import DashBoard from './Componet/DashBoard/DashBoard';
import Menu from './Componet/Menu/Menu';
import AddFoods from './Componet/MaintanceFood/AddFoods';
import TopBar from './Componet/SideBarAdmin/TopBar';
import UpdateFood from './Componet/MaintanceFood/UpdateFood';
import GetFood from './Componet/MaintanceFood/GetFood';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="admin-container">
        <AdminSideBar />
        <TopBar />
        <div className="admin-main">
          <Routes>
            <Route path="/*" element={<DashBoard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/addFood" element={<AddFoods />} />
            <Route path="/updateFood/:id" element={<UpdateFood />} />
            <Route path="/GetFood/:id" element={<GetFood />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
