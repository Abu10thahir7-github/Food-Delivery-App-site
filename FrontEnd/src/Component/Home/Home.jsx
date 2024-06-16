import React from 'react'
import './home.css'
import banner from './banner.jpg'
import SearchIcon from '@mui/icons-material/Search';
function Home() {
  return (
    <div className='home'>
        <div className="home-nav">
            <div className="logo">

            <h1>Velonto</h1>
            </div>
            <div className="search" >
               
                <input type="text" placeholder='Search....'/>
                 <SearchIcon  className='search-icon'/>
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