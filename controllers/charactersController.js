const express = require('express')
const characters = express.Router()
const {
    getAllCharacters,
    getAllImages
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

characters.get('/images', async (req, res) => {
    const allImages = await getAllImages()
    if(allImages[0]) {
        res.status(200).json(allImages)
    }
    else {
        res.status(500).json({error: 'server error'})
    }
})

module.exports = characters;