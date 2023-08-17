const express = require('express')
const characters = express.Router()
const {
    getAllCharacters
} = require('../queries/charactersQuery.js')

characters.get('/', async (req, res) => {
    const allCharacters = await getAllCharacters()
    if(allCharacters[0]) {
        res.status(200).json(allCharacters)
    }
    else {
        res.status(500).json({error: 'server error'})
    }
})

module.exports = characters;