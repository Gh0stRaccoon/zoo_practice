const express = require("express")
const { getAllAnimals } = require("../controllers/animals.controller")
const router = express.Router()

router.get("/", getAllAnimals)

module.exports = { router }