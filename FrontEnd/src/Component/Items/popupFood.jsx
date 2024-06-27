import React from 'react';
import './foodpopup.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
function FoodDetailsPopup({ food, onClose }) {
    return (
        <div className='food-details-popup'>
            <div className='popup-content'>
                <span className='close-btn' onClick={onClose}><CloseRoundedIcon className='close-icon' /></span>
                    <div className="pop-detail">

                  <div className="popup-food-con">

                <img src={food.imageUrl || food.image} alt='Food' />
                {/* Add any other details you want to display */}
                <div className="pop-des">

                <p>{food.FoodDescription}</p>
                </div>
                  </div>
                  <div className="popup-details">
                <h2>{food.FoodName}</h2>
                <p>Hotel : <span>{food.hotelName}</span> </p>
                <p>Category : <span>{food.FoodCategory}</span></p>
                <p>Price: ₹<span>{food.price}</span></p>
                <p>Time: <span>{food.time}</span> min</p>

                <div className="addCart-btn">
                            <button>Add</button>
                            <FavoriteBorderOutlinedIcon className='heart-icon' />
                        </div>
                  </div>
                    </div>
            </div>
        </div>
    );
}

export default FoodDetailsPopup;
