const router = require('express').Router()
const Mentor = require('../models/mentor.model')

router.get('/', (req, res) =>{
    res.send("hello world")
})

router.post('add', (req, res) =>{
    Mentor.insertMany()
})

module.exports = router