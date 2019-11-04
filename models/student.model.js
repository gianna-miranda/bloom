const mongoose = require('mongoose')

const model = mongoose.model
const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstName: { type: String, required: true  },
    lastName: { type: String, required: true  },
    password: { type: String, required: true },
    rating: { type: Number, default: 5},
    email: { type: String, required: true },
    phoneNumber: { type: String, length: 11 },
    qualified: { type: Boolean, default: false},
    description: String,
    gradeLevel: String,
    gpa: String,
    tags: [ String ]
})

const studentModel = model("student", studentSchema)

module.exports = studentModel