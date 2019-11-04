const router = require('express').Router()
const Mentor = require('../models/mentor.model')

router.get('/', (req, res) =>{
    res.send("hello world")
})

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