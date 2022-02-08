var modelPets = require('../model/pets.json')

const petsController = {
    pets: (req,res)=>{
        res.send(modelPets)
    }
}

module.exports = petsController