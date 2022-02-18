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
        res.redirect('listaPets')
    },
    listaPets: (req,res) => {
        res.render('listaPets', {lPets: modelPets})
    }
}

module.exports = petsController