const mongoose = require('mongoose')

const model = mongoose.model
const Schema = mongoose.Schema

const mentorSchema = new Schema({
    firstName: { type: String, required: true  },
    lastName: { type: String, required: true  },
    password: { type: String, required: true },
    rating: { type: Number, default: Math.floor(Math.random() * 5)},
    email: { type: String, required: true },
    phoneNumber: { type: String, length: 11 },
    qualified: { type: Boolean, default: false},
    description: String,
    tags: [ String ]
})

const mentorModel = model("Mentor", mentorSchema)
//add gpa to student

module.exports = mentorModel