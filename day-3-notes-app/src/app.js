const express = require("express")
const app = express()
app.use(express.json())
const notes = []

app.get('/notes',(req,res)=>{
    res.send(notes)
})

app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("note is created")
})

app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]
    res.send("note is deleted")
})

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send("notes is edited")
})

module.exports = app