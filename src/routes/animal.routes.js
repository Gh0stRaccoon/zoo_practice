const express = require("express")
const { getAllAnimals, createAnimal } = require("../controllers/animals.controller")
const router = express.Router()

router.get("/", getAllAnimals)
router.post("/", createAnimal)

module.exports = { router }