const router = require('express').Router()
const mongoose = require('mongoose')
const Post = require('../models/Post-model')

//create posts
router.post('/', async (req, res)=> {
    const {username, title, desc } = req.body
    const newPost = new Post({
        username,
        title,
        desc
    })

    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).send(error)
    }
})
//update posts
router.put('/:id', async (req, res)=>{
    try {
        const updatedUser = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.send(updatedUser)
    } catch (error) {
        console.log(error)
    }
})

//delete posts
router.delete('/:id', async(req, res)=> {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.send('Post has been deleted')
    } catch (error) {
        res.send(error)
    }
})

//get one
router.get('/:id', async(req, res)=>{
   try {
       const post = await Post.findById(req.params.id)
        res.send(post)
   } catch (error) {
       return res.status(500).send(error)
   }
})

//find all post
router.get('/', async(req, res)=>{
   const username = req.query.user
   const cat = req.query.cat
   try {
       let posts
       if(username){
         posts = await Post.find({username})
       }else if(cat){
           posts = await Post.find({
               categories: {
               $in: [cat]
               }
           })
       }else{
           posts = await Post.find()
       }
       res.status(200).json(posts)
   } catch (error) {
       res.status(500).send(error)
   }
})


module.exports = router