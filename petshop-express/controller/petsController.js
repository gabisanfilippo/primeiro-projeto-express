const petsController = {
    pets: (req,res)=>{
        res.render('../model/pets.json')
    }
}

module.exports = petsController