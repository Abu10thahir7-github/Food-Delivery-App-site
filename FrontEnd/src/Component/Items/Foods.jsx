import React, { useEffect, useState } from 'react';
import './food.css';
import { Foodgetall_API } from '../../API-Services';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FoodDetailsPopup from './popupFood';
// Import CSS for toast

function Foods() {
    const [foodData, setFoodData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceOrder, setPriceOrder] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    const navigate = useNavigate();

    const fetchAllFoods = async () => {
        try {
            const response = await axios.get(Foodgetall_API);
            setFoodData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllFoods();
    }, []);

    useEffect(() => {
        let data = [...foodData];
        if (selectedCategory && selectedCategory !== 'All') {
            data = data.filter(item => item.category === selectedCategory);
        }
        if (priceOrder) {
            data.sort((a, b) => priceOrder === 'low' ? a.price - b.price : b.price - a.price);
        }
        setFilteredData(data);
    }, [selectedCategory, priceOrder, foodData]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handlePriceSort = (event) => {
        setPriceOrder(event.target.value);
    };

    const handleGetFood = (id) => {
        const food = filteredData.find(item => item._id === id);
        setSelectedFood(food);
        setShowPopup(true);
    };


    return (
        <div className='foods'>
            <div className="food-top-con">
                <div className="food-left-con">
                    <button onClick={() => handleCategoryChange('All')}>All</button>
                    <button onClick={() => handleCategoryChange('Pizza')}>Pizza</button>
                    <button onClick={() => handleCategoryChange('Burgers')}>Burgers</button>
                    <button onClick={() => handleCategoryChange('Breakfast')}>Breakfast</button>
                    <button onClick={() => handleCategoryChange('Mandhi')}>Mandhi</button>
                    <button onClick={() => handleCategoryChange('Seafood')}>Seafood</button>
                </div>
                <div className="food-search-con">
                    <div className="search">
                        <input type="text" placeholder='Search....' />
                        <SearchIcon className='search-icon' />
                    </div>
                </div>
                <div className="food-right-con">
                    <select onChange={handlePriceSort}>
                        <option value="">Sort by Price</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                </div>
            </div>
            <div className="food-item-con">
                {filteredData.map((data) => (
                    <div key={data._id} className="food-item">
                        <div onClick={() => handleGetFood(data._id)} className="food-cart" style={{ cursor: "pointer" }}>
                            <div className="food-img">
                                <img src={data.imageUrl || data.image} alt="Food" />
                            </div>
                            <div className="food-cart-details">
                                <div className="food-left">
                                    <div className="food-con">
                                        <p className='food-title'>{data.FoodName}</p>
                                        <p className="restaurant-name">{data.hotelName}</p>
                                        <p className="food-time">
                                            <AccessTimeOutlinedIcon className='food-time-icon' />
                                            <span>{data.time} min</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="food-right">
                                    <p className="food-price">₹{data.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="addCart-btn">
                            <button onClick={() => handleAddToCart(data)}>Add</button>
                            <FavoriteBorderOutlinedIcon className='heart-icon' />
                        </div>
                    </div>
                ))}
            </div>
            {showPopup && selectedFood && (
                <FoodDetailsPopup food={selectedFood} onClose={() => setShowPopup(false)} />
            )}
        </div>
    );
}

export default Foods;
