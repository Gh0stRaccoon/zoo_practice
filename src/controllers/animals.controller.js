const { Animal } = require("../models")

const getAllAnimals = async (req, res) => {
    const animals = await Animal.findAll()

    res.status(200).json({
        success: true,
        data: animals
    })
}

const createAnimal = async (req, res) => {
    const { name, species, age } = req.body

    const animal = await Animal.create({
        name, species, age
    })

    res.status(200).json({
        success: true,
        data: animal
    })
}

module.exports = {
    getAllAnimals
}