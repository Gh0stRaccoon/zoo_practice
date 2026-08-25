const express = require("express")
const { getAllKeepers } = require("../controllers/keepers.controller")
const router = express.Router()

router.get("/", getAllKeepers)

module.exports = { router }