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


//creating web server
let http = require('http')

let server = http.createServer((req,res) => {
    res.end("hello")
})

server.listen(3000,()=>{
    console.log("server runiiinnnngggggg");
})