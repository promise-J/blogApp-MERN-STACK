const router = require('express').Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User-model')

//register
router.post('/register', async (req, res)=> {
    const {username, password, email } = req.body

    const hashPwd = await bcrypt.hash(password, 10)

    const newUser = new User({
        username: username,
        password: hashPwd,
        email: email
    })

    try {
        const existingUser = await User.findOne({username})
        if(existingUser){
            res.send('User already exist...')
        }
    } catch (error) {
        res.send(error)
    }


    try {

        const savedUser = await newUser.save()
        res.status(200).send(savedUser)
    } catch (error) {
        console.log(error)
    }

})

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


//login
router.post('/login', async (req, res)=> {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email: email})
        if(!user){
            return res.send('User not found')
        }
        
        const validPass = await bcrypt.compare(password, user.password)
        if(!validPass){
            return res.send('Password is invalid')
        }

        res.send('You are logged in as...' + user.username)
    } catch (error) {
        res.status(500).send(error)
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
        await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router