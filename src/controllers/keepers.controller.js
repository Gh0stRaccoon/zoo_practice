const { Keeper, Animal } = require("../models")

const getAllKeepers = async (req, res) => {
    const keepers = await Keeper.findAll({
        include: {
            model: Animal,
            as: "animals"
        }
    })

    res.status(200).json({
        success: true,
        data: keepers
    })
}

module.exports = {
    getAllKeepers
}