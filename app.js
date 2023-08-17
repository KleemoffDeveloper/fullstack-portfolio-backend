const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

// LANDING PAGE
app.get('/', (req, res) => {
    res.sendFile('./landing-page.html', {root:__dirname}, (error) => {
        if(error) {
            console.log('File not found.')
        }
        else {
            console.log('Successful request.')
        }
    })
})

// ROUTES
const charactersController = require('./controllers/charactersController.js')
app.use('/characters', charactersController)

// 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send('Page not found.')
})

// EXPORT
module.exports = app;