const router = require('express').Router()
const mongoose = require('mongoose')
const Category = require('../models/Category-model')


router.post('/', async (req, res)=>{
    const newCategories = new Category(req.body)

    try {
        const savedCat = await newCategories.save()
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/', async (req, res)=>{

    try {
        const savedCat = await Category.find()
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router