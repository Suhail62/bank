//import express
const express=require('express')

//import env file
require('dotenv').config()

//import cors
const cors=require('cors')

//import db connection
require('./db/dbconnection')

//import router
const rout=require('./routes/router')

//create server using express
const server=express()

//connect with frontend
server.use(cors())

//to convert all incoming json type data into js
server.use(express.json())

server.use(rout)

// server.get('/getpath/newuser',(req,res)=>{
//     res.send("get request response....")
// })

// server.get('/getpath/lastuser',(req,res)=>{
//     res.send("get request response 2....")
// })


//port set
const port=3000 || process.env.port

//running config
server.listen(port,()=>{
    console.log(`___server started at port number ${port}_____`);
})