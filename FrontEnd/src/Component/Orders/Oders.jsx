import React from 'react'
import './oders.css'
import food from './food.jpg'
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
function Oders() {
  return (
    <div className='oders'>
        <div className="oder-titile">

        <h3>My Orders</h3>
        </div>
        <div className="oder-address">
            <p>Delivery Address</p>
            <div className="other">

            <h4>1323 Morem Street</h4>
            <KeyboardArrowDownRoundedIcon  className='down-icon'/>
            </div>
            <div className="time-and-kl">
                <div className="time">

                <AccessTimeRoundedIcon className='time-icon oders-icon' />
                <p>40min</p>
                </div>
                <div className="kl">

                <FmdGoodOutlinedIcon className='loca-icon oders-icon' />
                41kms
                </div>
            </div>
        </div>

        <div className="oder-items">
            <div className="items">
                <img src={food} alt="" />
                <div className="food-titles">
                    <p>Burger Mozza XL Extra Cheese </p>
                    <div className="qty">
                        <CloseOutlinedIcon className=' qty-icon oders-icon' />
                         <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                         </select>
                    </div>
                </div>
                <div className="item-price">
                    <h5>₹200</h5>
                </div>
            </div>
            <div className="items">
                <img src={food} alt="" />
                <div className="food-titles">
                    <p>Burger Mozza XL Extra Cheese </p>
                    <div className="qty">
                        <CloseOutlinedIcon className=' qty-icon oders-icon' />
                         <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                         </select>
                    </div>
                </div>
                <div className="item-price">
                    <h5>₹200</h5>
                </div>
            </div>
            <div className="items">
                <img src={food} alt="" />
                <div className="food-titles">
                    <p>Burger Mozza XL Extra Cheese </p>
                    <div className="qty">
                        <CloseOutlinedIcon className=' qty-icon oders-icon' />
                         <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                         </select>
                    </div>
                </div>
                <div className="item-price">
                    <h5>₹200</h5>
                </div>
            </div>
            <div className="items">
                <img src={food} alt="" />
                <div className="food-titles">
                    <p>Burger Mozza XL Extra Cheese </p>
                    <div className="qty">
                        <CloseOutlinedIcon className=' qty-icon oders-icon' />
                         <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                         </select>
                    </div>
                </div>
                <div className="item-price">
                    <h5>₹200</h5>
                </div>
            </div>
        </div>

        <div className="oder-total">
       
                <div className="odd-coupon">
                    <p>Find Promotion</p>
                    <button><DiscountRoundedIcon className='coupon-icon' /> Add Coupon</button>
                </div>
                <div className="pri-fre">

            <div className="total od-foot">
                <p>Total</p>
                <p className='price-font'>₹1200</p>
            </div>
            <div className="delivery od-foot">
                <p>Delivery</p>
                <p>Free</p>
            </div>
                </div>
            <div className="checkout">
                <button>Check out</button>
            </div>
            
        </div>
    </div>
  )
}

export default Oders