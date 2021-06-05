const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categories: {
        type: Array,
        required: false
    }
},{timestamps: true})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category