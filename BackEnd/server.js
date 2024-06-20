const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./Config/dbConnection');

const AllFoodRoute = require('./Route/AllFoodRoute')
dotenv.config();

connectDB();
app.use(cors());
app.use(cors({
   origin: 'http://localhost:5173'
 }));
 app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
 });
 

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());


app.use('/api/allFood',AllFoodRoute)


app.get('/', (req, res) => {
   res.send('API is running...');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
