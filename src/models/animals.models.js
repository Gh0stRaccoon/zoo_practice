const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.js");

const Animal = sequelize.define("Animal", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = { Animal }