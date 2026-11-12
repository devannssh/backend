const mongoose = require("mongoose")
function connectToDb(){
    mongoose.connect("mongodb+srv://dev:l0pdRSGfQ4QytHGZ@cluster0.f6gp51t.mongodb.net/first")
    .then(()=>{
        console.log("connect to database")
    })
}

module.exports = connectToDb