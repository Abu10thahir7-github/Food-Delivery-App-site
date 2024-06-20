// src/Sidebar.js
import React, { useState } from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
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
        <Link to="/admin/*"><li><DashboardRoundedIcon /> <p>DashBoard</p></li></Link>
        <Link to="/admin/menu"><li>< FastfoodRoundedIcon/> <p>Menu</p></li></Link>  
        <Link to="/admin/menu"><li>< DeliveryDiningRoundedIcon/> <p>Food Orders</p></li></Link>
        <Link to="/admin/menu"><li>< PeopleRoundedIcon/> <p>Customers <br />  Reviews</p></li></Link>
        <Link to="/admin/menu"><li>< AccountBalanceWalletRoundedIcon/> <p>Account</p></li></Link>

           
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
