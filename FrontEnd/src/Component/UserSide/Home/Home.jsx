import React from 'react'
import './home.css'

import banner from './banner.jpg'


function Home() {
  return (
    <div className='home'>
          <div className="home-nav">
    <div className="logo">

    <h1>Velonto</h1>
    </div>
    
    <div className="log-reg">
        <button className='reg'> Register</button>
        <button className='log'>Login</button>
    </div>
</div>
        <div className="home-ads">
          <img src={banner} alt="" />
        </div>
     
    </div>
  )
}

export default Home