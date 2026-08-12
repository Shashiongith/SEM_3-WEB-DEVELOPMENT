//import fs from 'fs'
const fs = require('fs')
fs.writeFileSync("index.html","heloooooo")

//file reading 
let data = fs.readFileSync("index.html")
console.log(data.toString(),"helllllo")


//update file
fs.appendFileSync("index.html","<h1>Shashi</h1>")

//delete file
fs.unlinkSync("index.html")