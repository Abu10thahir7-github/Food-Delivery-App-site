// src/Sidebar.js
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';
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
         <h1>Velonto</h1>
        <ul>
          <Link to={'/foods'} >

          <li><HomeRoundedIcon /> Home</li>
          </Link>
          <Link to={'/addCart'}>

          <li>< ShoppingCartRoundedIcon/>Add Cart</li>
          </Link>
          <Link to={'/like'}>

          <li>< FavoriteIcon/>Favorite</li>
          </Link>
           
        </ul>
      </nav>
      <div className="admin-profile">
        <img src={ad_img} alt="" />
        <button>LogOut</button>
    
      </div>
    </div>
  );
};

export default Sidebar;
