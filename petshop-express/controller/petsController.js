var modelPets = require('../model/pets.json')

const petsController = {
    pets: (req,res)=>{
        res.send(modelPets)
    },
    exibePets: (req,res) => {
        res.render('petsCadastro')
    },
    cadastraPets: (req,res) => {
        let pet = req.body
        modelPets.push(pet)
    }
}

module.exports = petsController