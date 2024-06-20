import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Foodgetall } from '../../../API-Services';
import { useState , useEffect } from 'react';
import axios from 'axios';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import './menu.css'
import { Link } from 'react-router-dom';
function Menu() {
  const [foodData, setFoodData] = useState([]);
  console.log(foodData);  
  const fetchAllFoods = async () => {
      try {
          const response = await axios.get(Foodgetall);
          setFoodData(response.data);
          console.log(response.data + " api data.....");
      } catch (error) {
          console.log(error);
      }
  };

  useEffect(() => {
      fetchAllFoods();
  }, []);

  return (
    <div className='menu'>
        <div className="menu-nav">
            <div className="nav-con">
     
            <Link to="/admin/addFood">

                <button className="add-food-btn"> <AddRoundedIcon className='add-food-icon' />Add</button>
            </Link>

            </div>
        </div>

        <div className="menu-items">
          <div className="menu-title">
            
          </div>
          <div className="menu-item">
             
          {foodData.map((data) => (
                    <div key={data._id} className="food-item">
                        <div className="food-img">
                      
                            <img src={data.image} alt={data.FoodName} />
                        </div>
                        <div className="food-cart-details">
                            <div className="food-left">
                                <div className="food-con">
                                    <p className='food-title'>{data.FoodName}</p>
                                    <p className="restaurant-name">{data.hotelName}</p>
                                    <p className="food-time">
                                        <AccessTimeOutlinedIcon className='food-time-icon' />
                                        15-25 min
                                    </p>
                                </div>
                            </div>
                            <div className="food-right">
                                <p className="food-price">₹{data.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
          </div>
        </div>
    </div>
  )
}

export default Menu