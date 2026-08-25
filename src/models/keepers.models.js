const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.js");

const Keeper = sequelize.define("Keeper", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = { Keeper }