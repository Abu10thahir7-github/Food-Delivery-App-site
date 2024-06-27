import React, { useState } from 'react';
import axios from 'axios';
import './addfoods.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FoodItemsCreateAPI } from '../Api-URL';
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
    const [prevImage, setPrevImage] = useState(null);
    const [formData, setFormData] = useState({
        foodName: '',
        foodDescription: '',
        FoodCategory: '',
        hotelName: '',
        price: '',
        time: '',
        image: null,
        imageUrl: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
            imageUrl: '' // clear the imageUrl when a file is selected
        });
        setPrevImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleImageUrlChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            imageUrl: value,
            image: null // clear the file input when an image URL is provided
        });
        setPrevImage(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('FoodName', formData.foodName);
        formDataToSend.append('FoodDescription', formData.foodDescription);
        formDataToSend.append('FoodCategory', formData.FoodCategory);
        formDataToSend.append('hotelName', formData.hotelName);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('time', formData.time);
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        } else if (formData.imageUrl) {
            formDataToSend.append('imageUrl', formData.imageUrl);
        }

        try {
            const response = await axios.post(FoodItemsCreateAPI, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("Create success");
            navigate('/menu');
            console.log('Food created:', response.data);
        } catch (error) {
            console.error('Error creating food:', error);
        }
    };

    return (
        <div className="addFoods">
            <h1>Add Food Items</h1>
        <div className="addFoods-con">
            <form onSubmit={handleSubmit}>
                <Row className='gap-2 row'>
                    <Col>
                        <input
                            type="text"
                            name="foodName"
                            placeholder="Food Name"
                            value={formData.foodName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="foodDescription"
                            placeholder="Food Description"
                            value={formData.foodDescription}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="FoodCategory"
                            value={formData.FoodCategory}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Set Category</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Burgers">Burgers</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Mandhi">Mandhi</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Biriyani">Biriyani</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Salad">Salad</option>
                            <option value="Dessert">Dessert </option>
                            <option value="Veg">Veg </option>
                            <option value="Snack">Snack </option>
                            <option value="Shawarma">Shawarma </option>
                            <option value="Arabian">Arabian</option>
                        </select>
                    </Col>
                    <Col>
                        <input
                            type="text"
                            name="hotelName"
                            placeholder="Hotel Name"
                            value={formData.hotelName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="time"
                            placeholder="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col>
                    <div className="image-add">

                        <input
                            className='image-input'
                            type="file"
                            name="image"
                            id="image"
                            placeholder="Image"
                            onChange={handleFileChange}
                            />
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Image URL"
                            value={formData.imageUrl}
                            onChange={handleImageUrlChange}
                            />
                            </div>
                    </Col>
                </Row>
                <div className="add-btn">
                    <button type="submit">Create Food</button>
                </div>
            </form>
                <div className="img-pre">
                    {prevImage && <img src={prevImage} alt="Preview" />}
                </div>
        </div>
        </div>
    );
};

export default AddFood;
