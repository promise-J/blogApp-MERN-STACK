const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const cors = require('cors')
const path = require('path')


require('dotenv').config()
const db = require('./config').connection


// router import here
const {CategoriesRoute, PostRoute, AuthRoute, UserRoute} = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'images')))

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, 'images')
  },
  filename: (req, file, cb)=>{
    cb(null, req.body.name)
  }
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single('file'), (req, res)=>{
  console.log(req.file);
  res.status(200).json(req.file.path)
})

app.use('/api/auth', AuthRoute)
app.use('/api/categories', CategoriesRoute)
app.use('/api/posts', PostRoute)
app.use('/api/users', UserRoute)

const port = process.env.PORT || 5000

require('dotenv').config()
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true}, ()=>{
console.log('MongoDB server is running well too...');
}, )



app.listen(port, ()=> {
  console.log(`Server running willingly on port: ${port}`)
})