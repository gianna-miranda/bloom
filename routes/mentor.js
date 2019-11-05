const router = require('express').Router()
const Mentor = require('../models/mentor.model')

//GET Methods
router.get('/', (req, res) =>{
    Mentor.find({}, (err, doc) =>{
        if(err){
            console.log("Was not able to retreive all mentors")
        } else {
            console.log("mentors retrieved successfully")
            res.send(doc)
        }
    })
})

//POST Methods
router.post('/add', (req, res) =>{
    Mentor.insertMany([req.body], (err, doc) =>{
        if(err){
            console.log("was not able to add new mentor")
        } else{
            console.log(doc)
        }
        res.end()
    })
})

module.exports = router