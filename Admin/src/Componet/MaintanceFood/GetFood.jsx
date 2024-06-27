import React, { useState, useEffect } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useNavigate, useParams } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { FoodgetByID_API, FoodDelete_API } from '../Api-URL';
import './addfoods.css';
import axios from 'axios';

function GetFood() {
    const [foodDetail, setFoodDetail] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchFood = async () => {
        try {
            const response = await axios.get(FoodgetByID_API(id));
            console.log("API Response:", response.data); // Log API response
            setFoodDetail(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchFood();
    }, [id]);

    const handleEditFood = (id) => {
        navigate(`/updateFood/${id}`);
    };

    

    const handleDelete = async (id) => {
        try {
            const deleteFood = await axios.delete(FoodDelete_API(id));
            console.log(deleteFood.data);
            alert("Delete success");
            navigate(-1)
        } catch (err) {
            console.log(err);
        }
    };

    if (!foodDetail) {
        return <p>Loading...</p>;
    }

    return (
        <div className='food-details'>
            <h1>Food Details</h1>
            <div className="food-de">
                <div className="food-img">
                <img src={foodDetail.imageUrl || foodDetail.image} alt="Food" />
                </div>
                <div className="food-text-de">
                    <div className="food-text">
                        <p>Name: <span>{foodDetail.FoodName}</span></p>
                        <p>Price: <span>{foodDetail.price}</span></p>
                        <p>Hotel Name: <span>{foodDetail.hotelName}</span></p>
                        <p>Time: <span>{foodDetail.time}</span></p>
                        <p>Category : <span>{foodDetail.FoodCategory}</span></p>
                        <p>Description: <span>{foodDetail.FoodDescription}</span></p>
                    </div>
                    <div className="food-btn">
                        <button className='edit' onClick={() => handleEditFood(foodDetail._id)}> <EditRoundedIcon /> Edit</button>
                        <button className='delete' onClick={() => handleDelete(foodDetail._id)}> <DeleteRoundedIcon /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetFood;
