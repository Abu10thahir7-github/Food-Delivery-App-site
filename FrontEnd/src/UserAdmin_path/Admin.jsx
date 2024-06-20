import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSideBar from '../Component/AdminSide/SideBarAdmin/ADminSideBar';
import DashBoard from '../Component/AdminSide/DashBoard/DashBoard';
import Menu from '../Component/AdminSide/Menu/Menu';
import AddFoods from '../Component/AdminSide/MaintanceFood/AddFoods'
function Admin() {
  return (
    <div className="admin-container">
      <AdminSideBar />
      <div className="admin-main">
        <Routes>
          <Route path="/*" element={<DashBoard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/addFood" element={<AddFoods />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
