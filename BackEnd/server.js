const express = require('express');
const cors = require('cors');
const path = require('path');

const dotenv = require('dotenv');
const connectDB = require('./Config/dbConnection');

const AllFoodRoute = require('./Route/AllFoodRoute')
dotenv.config();

connectDB();

const app = express();
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());


app.use('/api/allFood',AllFoodRoute)


app.get('/', (req, res) => {
   res.send('API is running...');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
