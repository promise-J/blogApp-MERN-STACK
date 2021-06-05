const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        length: {
            min: 4
        }
    }
},{timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User