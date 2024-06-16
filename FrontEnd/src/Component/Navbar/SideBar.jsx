// src/Sidebar.js
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

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
          <li><HomeRoundedIcon /><span></span></li>
        
        </ul>
      </nav>
      <div className="admin-profile">
        <img src={ad_img} alt="" />
    
      </div>
    </div>
  );
};

export default Sidebar;
