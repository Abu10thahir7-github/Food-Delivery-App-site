import React from 'react'
import './dash.css'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import food from './food.jpg'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import user from './user.png'
function DashBoard() {
    return (
    <div className='dashboard'>
        <div className="dash-minNav">
            <div className="logo">
                <h2>Velonto</h2>
                </div> 
                <div className="right-dash-con">
                    <div className="not-mess">

                    <span><NotificationsNoneRoundedIcon className='dash-icon' /></span>
                    <span><ChatOutlinedIcon className='dash-icon' /></span>
                    <span><SettingsOutlinedIcon className='dash-icon' /></span>
                    </div>
                    <div className="log-reg">
                        <button className='ad-log-btn'>Login</button>
                        <button className='ad-sign-btn'>Sign</button>
                    </div>
                </div>
        </div>
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

           
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            <div className="top-con">

            <div className="img">
                <img src={food} alt="" />
                <div className="top-title">
                    <p>Burger</p>
                    <p>₹1200</p>

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
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashBoard