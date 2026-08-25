const express = require("express")
const router = express.Router()
const { router: animalRoutes } = require("./animal.routes")
const { router: keeperRoutes } = require("./keepers.routes")

router.use("/animals", animalRoutes)
router.use("/keepers", keeperRoutes)


module.exports = { router }