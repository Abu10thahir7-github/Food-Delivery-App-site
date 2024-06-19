const express = require('express');
const { upload, addAllFood, getAllFood, getFoodById, updateFood, deleteFood } = require('../Controllers/AllFoodController');
const router = express.Router();

router.post('/AllFoodCreate', upload.single('image'), addAllFood);
router.get('/getAllFood', getAllFood);
router.get('/getFoodById/:id',getFoodById);
router.put('/updateFood/:id',upload.single('image'),updateFood);
router.delete('/deleteFood/:id',deleteFood);

module.exports = router;

  