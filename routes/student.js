const router = require('express').Router()
const Student = require('../models/student.model')

//GET Methods
router.get('/', (req, res) =>{
    Student.find({}, (err, doc) =>{
        if(err){
            console.log("Was not able to retreive all mentors")
        } else {
            res.send(doc)
        }
    })
})

//POST Methods
router.post('/add', (req, res) =>{
    Student.insertMany([req.body], (err, doc) =>{
        if(err){
            console.log("was not able to add new student")
        } else{
            console.log(doc)
        }
        res.end()
    })
})

module.exports = router