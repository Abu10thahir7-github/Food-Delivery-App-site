import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import foods from '../../../public/foods.jpeg'
import foods2 from '../../../public/foods-2.jpeg'
import foods3 from '../../../public/foods-3.jpeg'
import foods4 from '../../../public/foods-4.jpeg'
import foods5 from '../../../public/foods-5.jpeg'

function Home() {
  const backgroundImages = [
       foods,
      foods2,
      foods3,
      foods4,
      foods5
       // add more image URLs here
  ];
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 5000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div className='home'>
      <div className="home-nav">
        <div className="logo">
          <h1>Velonto</h1>
        </div>
      </div>
      <div className="home-con">

      <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="home-ads">
        <div className="home-text">
          <h1>Order delicious meals from your favorite restaurants. <br /> Fast delivery at your doorstep</h1>
          <Link to="/foods">
            <button>GO <ArrowForwardIcon className='arrow-icon' /></button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
