const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.js");

const Animals_keepers = sequelize.define("animal_keepers", {
    animal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    keeper_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
})

module.exports = { Animals_keepers }