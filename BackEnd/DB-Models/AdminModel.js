const mongoose = require("mongoose");

// Define the schema for authentication
const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "admin",
    }
});

// Create the model from the schema
const AdminSchemaModel = mongoose.model("AdminSchema", AdminSchema);

// Export the model
module.exports = AdminSchemaModel;
