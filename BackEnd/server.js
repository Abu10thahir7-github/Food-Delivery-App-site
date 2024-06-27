const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();
const UserSchema = require('./DB-Models/UserModel');
const AllFoodRoute = require('./Route/AllFoodRoute');

const app = express();

const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());

const url = "mongodb://localhost:27017/Foode-Delivery";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Not Connected', err));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api/allFood', AllFoodRoute);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Signup Route
app.post('/Usersign', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await UserSchema.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ status: "error", message: "Email already exists" });
        }

        // If not, create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserSchema({ name, email, password: hashedPassword });
        await user.save();
        res.json({ status: "success" });
    } catch (err) {
        console.error('Error during user registration:', err);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

// Login Route
// Login Route
app.post('/Userlogin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserSchema.findOne({ email: email });
        if (user) {
            const response = await bcrypt.compare(password, user.password);
            if (response) {
                const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET || "jwt-secret-key", { expiresIn: '1d' });
                res.cookie("token", token, { httpOnly: true }); // Set cookie with credentials
                console.log(token);
                return res.json({ status: "success", role: user.role, name: user.name, userId: user._id });
            } else {
                return res.status(401).json({ status: "error", message: "Incorrect password" });
            }
        } else {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

// Verify Admin Middleware
const verifyadmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    } else {
        jwt.verify(token, process.env.JWT_SECRET || "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Error on token" });
            } else {
                if (decoded.role === "user") {
                    next();
                } else {
                    return res.status(403).json({ message: "Not user" });
                }
            }
        });
    }
}

app.options('/Userlogin', cors(corsOptions)); // Enable preflight requests
app.options('/Usersign', cors(corsOptions)); // Enable preflight requests

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
