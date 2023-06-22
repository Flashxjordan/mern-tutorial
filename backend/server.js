//all of our routes, modules, and controllers
//entry point to our server

//console.log('Hello World')

const express = require('express') //backend framework 
const dotenv = require('dotenv').config() //enviroment variables 
const port = 5000

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))