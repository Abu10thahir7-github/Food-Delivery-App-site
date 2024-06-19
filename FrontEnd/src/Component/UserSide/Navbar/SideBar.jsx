// src/Sidebar.js
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './nav.css';
import ad_img from'./user.png'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? ' ' : 'open'}`}>
      
      <nav>
        <ul>
          <li><HomeRoundedIcon /></li>
          <li>< ShoppingCartRoundedIcon/></li>
          <li>< AccountBalanceWalletRoundedIcon/></li>
          <li>< FavoriteIcon/></li>
           
        </ul>
      </nav>
      <div className="admin-profile">
        <img src={ad_img} alt="" />
    
      </div>
    </div>
  );
};

export default Sidebar;
