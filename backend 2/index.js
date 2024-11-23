//1. import
const express = require("express")

//2.initializing
const app= new express()
app.use(express.json());

const school =[
    {name:"manu",Idno:"213"},
    {name:"eva",Idno:"214"},
    {name:"anu",Idno:"215"},
];
//3.api creation
app.get('/student',(req,res)=>{
    res.send(school)
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    school.push(req.body)
    res.send("data added")
})

//4.port
app.listen(4502,()=>{
    console.log("port is running")
})