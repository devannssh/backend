const noteModel = require("./models/notes.model")
const express = require("express")
const app = express()
app.use(express.json())


app.post('/notes', async (req,res)=>{
    const {title , description }= req.body //destructing the data
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created",
        note
    })
})


module.exports = app
