 const UserModel = require('../DB-Models/UserModel');
const AllFoodModels = require('../DB-Models/AllFoodModels');







 const addToCart = async (req, res) => {
    const {foodId,userId} = req.body;
    console.log(userId,foodId);
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }   
        const food = await AllFoodModels.findById(foodId);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        user.userCollection.push(foodId);
        await user.save();
        console.log('Food added to cart successfully');
        res.json({ message: 'Food added to cart successfully' });
    } catch (error) {
        console.error('Error adding food to cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const getAllCart = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const cart = user.userCollection;
        res.json({ cart });
        console.log('Cart retrieved successfully');
    } catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { addToCart ,getAllCart};