const router = require('express').Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User-model')
const jwt = require('jsonwebtoken')
const {generateToken, cleanUser} = require('../utils')

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



//login
router.post('/login', async (req, res)=> {
    const {username, password} = req.body
    // if(!username || !password){
    //     return window.location.reload()
    // }
    try {
        const user = await User.findOne({username: username})
        if(!user){
            // return res.send('User not found')
            return window.location.reload()
        }
        
        const validPass = await bcrypt.compare(password, user.password)
        if(!validPass){
            return window.location.reload()
        }

        return res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router