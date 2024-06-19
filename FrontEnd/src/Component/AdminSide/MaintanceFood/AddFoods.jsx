import React, { useState } from 'react';
import axios from 'axios';
import { FoodItemsCreateAPI } from '../../../API-Services';
const AddFood = () => {
    const [foodName, setFoodName] = useState('');
    const [foodDescription, setFoodDescription] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('FoodName', foodName);
        formData.append('FoodDescription', foodDescription);
        formData.append('hotelName', hotelName);
        formData.append('price', price);
        formData.append('rating', rating);
        formData.append('image', image);

        try {
            const response = await axios.post(FoodItemsCreateAPI, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("create success")
            console.log('Food created:', response.data);
        } catch (error) {
            console.error('Error creating food:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Food Name</label>
                <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Food Description</label>
                <input
                    type="text"
                    value={foodDescription}
                    onChange={(e) => setFoodDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Hotel Name</label>
                <input
                    type="text"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rating</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Image</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
            </div>
            <button type="submit">Create Food</button>
        </form>
    );
};

export default AddFood;
