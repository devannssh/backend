const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()
app.use(express.json())

app.post('/api/notes',async(req,res)=>{
    const {title, description} = req.body
    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message : "note is created",
        note
    })
})

app.delete('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
    console.log(id)
    console.log(req.params)
    await noteModel.findByIdAndDelete(id)
    
    
    res.status(200).json({
        message : "notes is deleted"
    })
})
app.get('/api/notes',async(req,res)=>{
   const notes= await noteModel.find()
   res.status(200).json({
    message : "notes fetched",
    notes
   })
})
app.patch('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
   await noteModel.findByIdAndUpdate(id, {description})
})
module.exports= app