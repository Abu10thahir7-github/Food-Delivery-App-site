const AllFoodModel = require('../DB-Models/AllFoodModels');

const multer = require('multer');
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folderPath = 'public/images';
        fs.mkdirSync(folderPath, { recursive: true }); // Create folder if it doesn't exist
        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed'));
        }
    }
});

// Utility function to delete an image
const deleteImage = (imagePath) => {
    fs.unlink(imagePath, (err) => {
        if (err) {
            console.error('Error deleting image:', err);
        } else {
            console.log('Image deleted:', imagePath);
        }
    });
};

// Create (Add) a new food item
const addAllFood = async (req, res) => {
    try {
        const { FoodName, FoodDescription, hotelName, price, FoodCategory,time,imageUrl } = req.body;
        const image = req.file ? req.file.filename : null;
        const FoodCreate = await AllFoodModel.create({ FoodName, FoodDescription, hotelName, price,FoodCategory, time, image,imageUrl  });
        console.log("Added a new food", FoodCreate);
        res.status(201).send(FoodCreate);
    } catch (error) {
        res.status(500).send('Error adding food');
        console.error('Error adding food:', error);
    }
};

// Read (Get) all food items
const getAllFood = async (req, res) => {
    try {
        const foods = await AllFoodModel.find();
        const foodWithImage = foods.map(food => {
            const imagePath = food.image ? `http://localhost:5000/images/${food.image}` : null;
         
            return { ...food.toObject(), image: imagePath };
        });
        res.json(foodWithImage);
    } catch (error) {
        res.status(500).send('Error fetching foods');
        console.error('Error fetching foods:', error);
    }
};


// Read (Get) a single food item by ID
const getFoodById = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await AllFoodModel.findById(id);
        if (!food) {
            return res.status(404).send('Food not found');
        }
        const imagePath = food.image ? `http://localhost:5000/images/${food.image}` : null;
        res.status(200).send({ ...food.toObject(), image: imagePath });
        console.log({ ...food.toObject(), image: imagePath });
    } catch (error) {
        res.status(500).send('Error fetching food');
        console.error('Error fetching food:', error);
    }
};

// Update a food item by ID
const updateFood = async (req, res) => {
    try {
        const { id } = req.params;
        const { FoodName, FoodDescription,FoodCategory, hotelName,time, price ,imageUrl } = req.body;
        const existingFood = await AllFoodModel.findById(id);

        if (!existingFood) {
            return res.status(404).send('Food not found');
        }

        const image = req.file ? req.file.filename : existingFood.image;
        
        if (req.file && existingFood.image) {
            deleteImage(`public/images/${existingFood.image}`);
        }

        const updatedFood = await AllFoodModel.findByIdAndUpdate(
            id,
            { FoodName, FoodDescription, hotelName, price, time,FoodCategory,  image,imageUrl },
            { new: true }
        );

        res.status(200).send(updatedFood);
        console.log(updateFood);
    } catch (error) {
        res.status(500).send('Error updating food');
        console.error('Error updating food:', error);
    }
};

// Delete a food item by ID
const deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFood = await AllFoodModel.findByIdAndDelete(id);
        if (!deletedFood) {
            return res.status(404).send('Food not found');
        }
        res.status(200).send({ deletedFood, message: 'Food deleted successfully' });

        console.log('Food deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting food');
        console.error('Error deleting food:', error);
    } 
};



module.exports = {
    upload,
    addAllFood,
    getAllFood,
    getFoodById,
    updateFood,
    deleteFood,
   
};
