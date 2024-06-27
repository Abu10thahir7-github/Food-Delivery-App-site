const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
        default: 'user',
    },
    userCollection: {
        type: Array,
        default: [],
    },
    cart: [{
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
        },
    }],
});

const UserSchemaModel = mongoose.model('User', UserSchema);

module.exports = UserSchemaModel;
