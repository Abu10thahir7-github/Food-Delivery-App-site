const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

const AllFoodRoute = require('./Route/AllFoodRoute');
// const { connect } = require('http2');



app.use(cors());

 const url ="mongodb://localhost:27017/Foode-Delivery"
 mongoose.connect(url)
 .then(() => console.log('MongoDB Connected'))
     .catch(()=>console.log('MongoDB Not Connected'));
 
     

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());

 
app.use('/api/allFood',AllFoodRoute)


app.get('/', (req, res) => {
   res.send('API is running...');
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
