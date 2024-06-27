import React, { useState, useEffect } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Foodgetall_API } from "../Api-URL";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./menu.css";
import { Link } from "react-router-dom";

function Menu() {
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

  const handleGetFood = (id) => {
    navigate(`/GetFood/${id}`);
  };

  useEffect(() => {
    fetchAllFoods();
  }, []);

  return (
    <div className="menu">
      <div className="menu-nav">
        <div className="nav-con">
          <Link to="/addFood">
            <button className="add-food-btn">
              <AddRoundedIcon className="add-food-icon" />
              Add
            </button>
          </Link>
        </div>
      </div>

      <div className="menu-items">
        <div className="menu-title"></div>
        <div className="menu-item">
          {foodData.map((data) => (
            <div
              key={data._id}
              className="food-item"
              onClick={() => handleGetFood(data._id)}
            >
              <div className="food-img">
                <img src={data.imageUrl || data.image} alt="Food" />
              </div>
              <div className="food-cart-details">
                <div className="food-left">
                  <div className="food-con">
                    <p className="food-title">{data.FoodName}</p>
                    <p className="restaurant-name">{data.hotelName}</p>
                    <p className="food-time">
                      <AccessTimeOutlinedIcon className="food-time-icon" />
                      <p>{data.time} min</p>
                    </p>
                  </div>
                </div>
                <div className="food-right">
                  <p className="food-price">₹{data.price}</p>
                </div>
              </div>
              {/* <button className='edit' onClick={() => handleEditFood(data._id)}> <EditRoundedIcon />Edit</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
