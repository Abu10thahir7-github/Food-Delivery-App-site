import React from 'react'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';import './adBar.css';
import { Link } from 'react-router-dom';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';

import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
function TopBar() {
  return (
    <div>       <div className="dash-minNav">
    <div className="logo">
        <h2>Velonto</h2>
        </div> 
        <ul>
        <Link to="/admin/*"><li><DashboardRoundedIcon /> <p>DashBoard</p></li></Link>
        <Link to="/admin/menu"><li>< FastfoodRoundedIcon/> <p>Menu</p></li></Link>  
        <Link to="/admin/menu"><li>< DeliveryDiningRoundedIcon/> <p>Food Orders</p></li></Link>
        <Link to="/admin/menu"><li>< PeopleRoundedIcon/> <p> Customer </p></li></Link>
        <Link to="/admin/menu"><li>< AccountBalanceWalletRoundedIcon/> <p>Account</p></li></Link>

           
        </ul>
        <div className="right-dash-con">
            <div className="not-mess">

            <span><NotificationsNoneRoundedIcon className='dash-icon' /></span>
            <span><ChatOutlinedIcon className='dash-icon' /></span>
            <span><SettingsOutlinedIcon className='dash-icon' /></span>
            </div>
            <div className="log-reg">
                {/* <button className='ad-log-btn'>Login</button> */}
                <button className='ad-sign-btn'>LogOut</button>
            </div>
        </div>
</div></div>
  )
}

export default TopBar