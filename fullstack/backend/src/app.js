const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()
app.use(express.json())

app.post('/api/notes',async(req,res)=>{
    const {title, description} = req.body
    const note = await newModel({
        title, description
    })
    res.status(200).json({
        message:"note created",
        note
    })
})

module.exports = app