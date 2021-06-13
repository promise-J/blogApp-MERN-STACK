const router = require('express').Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User-model')

//get a user
router.get('/:id', async (req, res)=>{
    try { 
        //
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

//get all users
router.get('/', async (req, res)=> {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})


//delete user
router.delete('/:id', async(req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send('User is deleted...')
    } catch (error) {
        res.status(500).json(error)
    }
})

//update a user
router.put('/:id', async(req, res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).send(updatedUser)
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router

