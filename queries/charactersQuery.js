const db = require('../database/dbConfig.js')

const getAllCharacters = async () => {
    try {
        const allCharacters = db.any('SELECT * FROM characters')
        return allCharacters;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const getAllImages = async () => {
    try {
        const allImages = db.any('SELECT * FROM image_gallery')
        return allImages;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const getCharacter = async (id) => {
    try {
        const oneCharacter = db.one('SELECT * FROM characters WHERE id=$1', [id])
        return oneCharacter;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const createCharacter = async (character) => {
    try {
        const newCharacter = await db.one('INSERT INTO characters (name, age, images, first_appearance, description) VALUES ($1, $2, $3, $4, $5) RETURNING *', [character.name, character.age, character.images, character.first_appearance, character.description])
        return newCharacter;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const updateCharacter = async (id, data) => {
    // Make sure that only the values that were changed get updated
    // [...spread-operator]
    // `${template-literals}`
    try {
        const updatedCharacter = await db.one('UPDATE characters SET name=$2, age=$3, images=$4, first_appearance=$5, description=$6 WHERE id=$1 RETURNING *', [id])
        return updatedCharacter;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const deleteCharacter = async (id) => {
    try {
        const deletedCharacter = await db.one('DELETE FROM characters WHERE id=$1 RETURNING *', [id])
        return deletedCharacter;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

module.exports = {
    getAllCharacters,
    getAllImages,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
}