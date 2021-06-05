const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    }
},{timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post