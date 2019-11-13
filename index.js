require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

// note with heroku deployment you must source port from env
const PORT = process.env.PORT || 5006;

// register middleware component
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (heroku)
// Connect to Atlas in production

// database connection ppol
client = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {    
        console.log(err) 
        return
    }   
    console.log("Connected successfully to server") 
});


////////////////////////
///   api end points //
//////////////////////

const mentorRouter = require('./routes/mentor')
const studentRouter = require('./routes/student')
const loginRouter = require('./routes/login')

app.use('/mentor', mentorRouter)
app.use('/student', studentRouter)
app.use('/login', loginRouter)





app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })
