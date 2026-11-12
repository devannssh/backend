const express = require("express")
const app = express()
app.use(express.json())
const notes = []

app.post('/notes', (req, res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})              ///to create a note

app.get('/notes',(req,res)=>{
    res.send(notes)
} )            /// to view the note

//params

app.delete('/notes/:index',(req, res)=>{
    console.log(req.params)
    console.log(req.params.index)
    delete notes[req.params.index]
    res.send("note deleted succesfully")
})

//patch 
app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send("note updates successfully")
})
module.exports = app