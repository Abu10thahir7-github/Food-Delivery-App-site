import React, { useEffect, useState } from 'react';
import './food.css';
import { Foodgetall } from '../../../API-Services';
import SearchIcon from '@mui/icons-material/Search';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';

function Foods() {
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
        <div className='foods'>
            <div className="food-top-con">
                <div className="food-left-con">
                    <button>All</button>
                    <button>Pizza</button>
                    <button>Burgers</button>
                    <button>Breakfast</button>
                    <button>Mandhi</button>
                </div>
                <div className="food-search-con">
                    <div className="search">
                        <input type="text" placeholder='Search....' />
                        <SearchIcon className='search-icon' />
                    </div>
                </div>
                <div className="food-right-con">
                    <button>
                        <TuneRoundedIcon className='other-icon' />
                    </button>
                </div>
            </div>
            <div className="food-item-con">
                
                {foodData.map((data) => (
                    <div key={data._id} className="food-item">
                        <div className="food-img">
                            <FavoriteBorderOutlinedIcon className='heart-icon' />
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
    );
}

export default Foods;
