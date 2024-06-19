import React from 'react'
import Home from "../Component/UserSide/Home/Home"
import Foods from "../Component/UserSide/Items/Foods"
import Sidebar from "../Component/UserSide/Navbar/SideBar"

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