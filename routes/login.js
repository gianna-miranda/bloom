const router = require('express').Router()
const Mentor = require('../models/mentor.model')
const Student = require('../models/student.model')

router.post('/', (req, res) =>{
    const { email, password, type } = req.body
    console.log(req.body)
    if(type === "mentor"){
        Mentor.find({email, password}, (err, doc) =>{
            if(err){
                console.log(err)
                res.end()
            } else{
                res.send(doc[0])
            }
        })
    }
    if(type === "bloomer"){
        Student.find({email, password}, (err, doc) =>{
            if(err){
                console.log(err)
                res.end()
            } else{
                res.send(doc[0])
            }
        })
    }
    res.end()
})

module.exports = router