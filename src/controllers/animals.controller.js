const { Animal } = require("../models")

const getAllAnimals = async (req, res) => {
    const animals = await Animal.findAll()

    res.status(200).json({
        success: true,
        data: animals
    })
}

module.exports = {
    getAllAnimals
}