const express = require("express")
const app = express()

const mongoose = require("mongoose")
function connectToDb(){
    mongoose.connect("mongodb+srv://dev:l0pdRSGfQ4QytHGZ@cluster0.f6gp51t.mongodb.net/day-4")
        .then(()=>{
            console.log("connected to database")
        })
}
connectToDb()

module.exports = app