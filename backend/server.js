const express = require('express') //backend framework 
const dotenv = require('dotenv').config() //enviroment variables 
const port = process.env.PORT || 5000

const app = express()

app.get('/api/goals', (req, res) => {
    res.json({ message: 'Get goals' })
})

app.listen(port, () => console.log(`Server started on port ${port}`))