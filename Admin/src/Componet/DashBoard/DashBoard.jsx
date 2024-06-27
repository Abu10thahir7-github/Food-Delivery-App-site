import React from 'react'
import './dash.css'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import food from './food.jpg'
import { useEffect,useState } from 'react';
import axios from "axios";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import user from './user.png'
import { Foodgetall_API } from "../Api-URL";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function DashBoard() {
  const [foodData, setFoodData] = useState([]);
  const navigate = useNavigate();

  const fetchAllFoods = async () => {
    try {
      const response = await axios.get(Foodgetall_API);
      setFoodData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllFoods();
  }, []);
  const handleGetFood = (id) => {
    navigate(`/GetFood/${id}`);
  };

    return (
    <div className='dashboard'>
 
        <div className="dashBoard-home-view">

        
        <div className="resent-reviews">
            <div className="re-title">

            <h4>Recent Reviews</h4>
            </div>
            <div className="review-contant">

            
            <div className="re-user-con">
                <div className="re-user">

                <div className="re-img">

                <img src={user} alt="" />
                </div>
                <div className="re-user-name">
                    <p>Ruby Robert</p>
                    <p className="sice-user">User since 2020</p>
                </div>
                <div className="re-like">
                    
                </div>
               <FavoriteBorderRoundedIcon className='like-icon' />
                </div>
                <div className="re-foodDetail">
                    <div className="food-img-nameStar">
                    <img src={food} alt="" />
                    <div className="name-star">

                    <div className="food-name">

                        <p>Chicken burger</p>
                    </div>
                      <div className="rate-star">
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarOutlineRoundedIcon className='star-icon' />
                      </div>
                    </div>
                    </div>
                      <div className="reviews-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, praesentium?</p>
                      </div>
                </div>
            </div>
            <div className="re-user-con">
                <div className="re-user">

                <div className="re-img">

                <img src={user} alt="" />
                </div>
                <div className="re-user-name">
                    <p>Ruby Robert</p>
                    <p className="sice-user">User since 2020</p>

                </div>
                </div>
                <div className="re-foodDetail">
                    <div className="food-img-nameStar">
                    <img src={food} alt="" />
                    <div className="name-star">

                    <div className="food-name">

                        <p>Chicken burger</p>
                    </div>
                      <div className="rate-star">
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarOutlineRoundedIcon className='star-icon' />
                      </div>
                    </div>
                    </div>
                      <div className="reviews-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, praesentium?</p>
                      </div>
                </div>
            </div>
            <div className="re-user-con">
                <div className="re-user">

                <div className="re-img">

                <img src={user} alt="" />
                </div>
                <div className="re-user-name">
                    <p>Ruby Robert</p>
                    <p className="sice-user">User since 2020</p>

                </div>
                </div>
                <div className="re-foodDetail">
                    <div className="food-img-nameStar">
                    <img src={food} alt="" />
                    <div className="name-star">

                    <div className="food-name">

                        <p>Chicken burger</p>
                    </div>
                      <div className="rate-star">
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarOutlineRoundedIcon className='star-icon' />
                      </div>
                    </div>
                    </div>
                      <div className="reviews-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, praesentium?</p>
                      </div>
                </div>
            </div>
            <div className="re-user-con">
                <div className="re-user">

                <div className="re-img">

                <img src={user} alt="" />
                </div>
                <div className="re-user-name">
                    <p>Ruby Robert</p>
                    <p className="sice-user">User since 2020</p>

                </div>
                </div>
                <div className="re-foodDetail">
                    <div className="food-img-nameStar">
                    <img src={food} alt="" />
                    <div className="name-star">

                    <div className="food-name">

                        <p>Chicken burger</p>
                    </div>
                      <div className="rate-star">
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarOutlineRoundedIcon className='star-icon' />
                      </div>
                    </div>
                    </div>
                      <div className="reviews-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, praesentium?</p>
                      </div>
                </div>
            </div>
            </div>
        </div>
        <div className="top-sell-foods">
            <div className="top-title">
                <h4>Top Selling</h4>
            </div>
            <div className="top-food">

           
          
            {foodData.map((data) => (
            <div
              key={data._id}
              className="top-con"
              onClick={() => handleGetFood(data._id)}
            >  
          

            <div className="img">
            <img src={data.imageUrl || data.image} alt="Food" />
                <div className="top-title">
                    <p>{data.FoodName}</p>
                    <p>{data.price}</p>

                </div>
                <div className="star-rate">

                <div className="rate-star">
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarRoundedIcon className='star-icon' />
                        <StarOutlineRoundedIcon className='star-icon' />
                      </div>
                      <div className="rating">
                        <p>4.5</p>
                      </div>
                </div>
            </div>
            </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashBoard