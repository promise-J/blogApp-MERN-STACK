const mongoose = require('mongoose')
require('dotenv').config()


const connection = `mongodb+srv://promise:${process.env.DB_PASSWORD}@real.jme6j.mongodb.net/blogPost?retryWrites=true&w=majority`

module.exports = {
    connection: connection
}