import React from 'react'
import Home from "../Component/UserSide/Home/Home"
import Sidebar from "../Component/UserSide/Navbar/SideBar"
import Foods from '../Component/UserSide/Items/Foods.jsx'
import Oders from "../Component/UserSide/Orders/Oders"

function User() {
  return (
    <>

    <div className="main-home">
    <Sidebar />
      <div className="food-home">
    
    <Home />
    
   <Foods />
      </div>
      <div className="oders-main">
    
    <Oders />
      </div>
    </div>
        </>
  )
}

export default User