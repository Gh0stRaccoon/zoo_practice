const { Animal } = require('./animals.models.js')
const { Keeper } = require("./keepers.models.js")
const { Animals_keepers } = require("./animals-keepers.models.js");

Animal.belongsToMany(Keeper, {
    through: Animals_keepers,
    foreignKey: "animal_id",
    otherKey: "keeper_id",
    as: "keepers"
})

Keeper.belongsToMany(Animal, {
    through: Animals_keepers,
    foreignKey: "keeper_id",
    otherKey: "animal_id",
    as: "animals"
})

// cuando haga consulta de un cuidador y diga que añada a los animales
// el resultado será similar a este:
// {
//     name: "Juan Carlos",
//     email: "juancarlos.bodoque@gmail.com",
//     animals: [
//         {...},
//         {...}
//     ]
// }

module.exports = {
    Animal,
    Keeper,
    Animals_keepers
}