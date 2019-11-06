const router = require('express').Router()
const Mentor = require('../models/mentor.model')
const student = require('../models/student.model')

router.get('/', (req, res) =>{
    const { username, password } = req.body
    
})

module.exports = router