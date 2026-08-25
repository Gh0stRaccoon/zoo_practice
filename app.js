require("dotenv").config()

const cors = require("cors")
const express = require("express")
const { router } = require("./src/routes")
const { sequelize } = require("./src/config/database.js")
const e = require("express")
const app = express()

app.use(cors({
    origin: ["*"]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    await sequelize.sync()
    console.log(`Server running on: http://localhost:${PORT}`)
})

module.exports = app;