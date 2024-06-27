// src/Sidebar.js
import React, { useState } from 'react';

import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';import './adBar.css';
import { Link } from 'react-router-dom';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
function AdminSideBar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="admin-nav">

    <div className={`sidebar ${isOpen ? ' ' : 'open'}`}>
         
      <nav>
        <ul>
        <Link to="/*"><li><DashboardRoundedIcon /> <p>DashBoard</p></li></Link>
        <Link to="/menu"><li>< FastfoodRoundedIcon/> <p>Menu</p></li></Link>  
        <Link to="/addFood"><li>< ControlPointRoundedIcon/> <p> Add Foods</p></li></Link>
      
        {/* <Link to="/admin/menu"><li>< AccountBalanceWalletRoundedIcon/> <p>Chefs</p></li></Link> */}

           
        </ul>
      </nav>
      
      <div className="nav-bottom">
        <div className="upgrade">
           <p>Upgrade Your Account to get more benefits</p>
           <button>Upgrade</button>
        </div>
    
      </div>
    </div>
    </div>
  );
};

export default AdminSideBar;
