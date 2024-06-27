import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FoodgetByID_API, FoodUpdate_API } from '../Api-URL';

const UpdateFood = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        foodName: '',
        foodDescription: '',
        hotelName: '',
        price: '',
        image: null,
        imageUrl: ''
    });

    const [prevImage, setPrevImage] = useState(null);
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {
        const fetchFoodItem = async () => {
            try {
                const response = await axios.get(FoodgetByID_API(id));
                const foodData = response.data;
                setFormData({
                    foodName: foodData.FoodName,
                    foodDescription: foodData.FoodDescription,
                    hotelName: foodData.hotelName,
                    price: foodData.price,
                    imageUrl: foodData.imageUrl || '',
                    image: null
                });
                setPrevImage(foodData.imageUrl || foodData.image);
            } catch (error) {
                console.error('Error fetching food item:', error);
            }
        };
        fetchFoodItem();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
            imageUrl: '' // clear the imageUrl input when an image file is provided
        });
        setNewImage(URL.createObjectURL(file));
        setPrevImage(null);
    };

    const handleImageUrlChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            imageUrl: value,
            image: null // clear the file input when an image URL is provided
        });
        setPrevImage(value); // set the preview image to the new URL
        setNewImage(null); // clear the new image preview
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.image && !formData.imageUrl) {
            alert('Please provide an image file or image URL.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('FoodName', formData.foodName);
        formDataToSend.append('FoodDescription', formData.foodDescription);
        formDataToSend.append('hotelName', formData.hotelName);
        formDataToSend.append('price', formData.price);
        if (formData.imageUrl) {
            formDataToSend.append('imageUrl', formData.imageUrl);
        }
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        // Log formDataToSend for debugging
        for (let pair of formDataToSend.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        try {
            const response = await axios.put(FoodUpdate_API(id), formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("Update success");
            navigate(-1);
            console.log('Food updated:', response.data);
        } catch (error) {
            console.error('Error updating food:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="updateFood">
            <form onSubmit={handleSubmit}>
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
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={formData.imageUrl}
                    onChange={handleImageUrlChange}
                />
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Image"
                    onChange={handleFileChange}
                />
                <button type="submit">Update Food</button>
            </form>
            <div className="image-previews">
                {newImage ? (
                    <div>
                        <p>New Image:</p>
                        <img src={newImage} alt="New Food" style={{ width: '200px', height: '200px' }} />
                    </div>
                ) : (
                    prevImage && (
                        <div>
                            <p>Previous Image:</p>
                            <img src={prevImage} alt="Previous Food" style={{ width: '200px', height: '200px' }} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default UpdateFood;
