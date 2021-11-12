const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    role: {
        type: Number,
        trim: true,
        default: 2
    },

    name: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    image: {
        type: String,
        trim: true,
        default: 'profile.jpg'
    },

    password: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

const User = model('User', UserSchema);
module.exports = User