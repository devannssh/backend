const express = require("express")
const app = express()
app.use(express.json())  // makes express read json
const notes = []

app.get('/',(req,res)=>{
    res.send("hiii")
})

app.post('/notes',(req, res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("recieved")
})
app.get('/notes',(req,res)=>{
    res.send(notes)
})
app.listen(3002,()=>{
    console.log("server is listening at 3002 ....")
})