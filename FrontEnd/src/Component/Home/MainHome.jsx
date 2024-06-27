// src/Component/MainHome/MainHome.jsx
import React from 'react';

import Foods from '../Items/Foods';
import Orders from '../Orders/Oders';
import './home.css'
const MainHome = () => {
  return (
    <div className="MainHome">
    
   
   
      <Foods />
   
      <Orders />
    </div>
  );
};

export default MainHome;