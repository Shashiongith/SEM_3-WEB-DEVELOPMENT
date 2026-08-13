// {//import fs from 'fs'
// const fs = require('fs')
// fs.writeFileSync("index.html","heloooooo")

// //file reading 
// let data = fs.readFileSync("index.html")
// console.log(data.toString(),"helllllo")


// //update file
// fs.appendFileSync("index.html","<h1>Shashi</h1>")

// //delete file
// fs.unlinkSync("index.html")}

//to start the server only one time we install nodemon
//nodemon start

//--------------------------------------------------------------------------------------------------------------

//installing os

// {const os = require ('os')
// console.log(os.totalmem()/1024/1024/1024,"GB");
// console.log(os.freemem()/1024/1024/1024,"GB");
// console.log(os.cpus(),"cores");
// console.log(os.arch(),"arch");
// console.log(os.uptime()/3600,"time");}


//--------------------------------------------------------------------------------------------------------------


// {//creating web server
// let http = require('http')

// let server = http.createServer((req,res) => {
//     //console.log(req.url,"kahan sai request aa rahe hai");
//     //res.end("hello")

//     if(req.url == '/'){
//         res.end("home")
//     }
//     else if(req.url == '/about'){
//         res.end("about")
//     }
//     else if(req.url == '/contact'){
//         res.end("contact")
//     }
//     else if(req.url == '/gallery'){
//         res.end("gallery")
//     }
// })

// server.listen(4000,()=>{
//     console.log("server runiiinnnngggggg");
// })}

//--------------------------------------------------------------------------------------------------------------
//creating web server express
const express = require('express')
const app = express()

app.use((req , res , next) =>{
    console.log("rejected 1");
    next()
})
app.use((req , res , next) =>{
    console.log("rejected 2");
    next()
})

app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/about',(req,res)=>{
    res.send("about")
})
app.get('/contact',(req,res)=>{
    res.send("contact")
})
app.get('/gallery',(req,res)=>{
    res.send("gallery")
})

app.listen(4000,()=>{
    console.log("server runiiinnnngggggg");
})