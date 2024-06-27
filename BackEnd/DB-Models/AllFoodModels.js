const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AllFoodModel = new Schema({
    FoodName:String,
    FoodDescription:String,
    hotelName:String,
    image:String,
    price:Number,
    time:Number,
    FoodCategory:String,
    imageUrl: { type: String }
    
})
const FoodModel = mongoose.model('AllFoodModel',AllFoodModel)

module.exports = FoodModel; 