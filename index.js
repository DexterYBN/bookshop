const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(require('./routes'))

mongoose.connect("mongodb+srv://into:code@cluster0.td9i9pz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Database connected succesfully.")
        app.listen(3000, () => {
            console.log("Application launched successfully at http://localhost:3000")
        })
    })
