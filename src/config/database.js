const pg = require("pg")
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    dialectModule: pg,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
})

module.exports = { sequelize }