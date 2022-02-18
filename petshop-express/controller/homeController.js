var servicosModel = require("../model/servico.json")

const homeController = {
    home: (req,res) =>{
        res.render('index',{listaServicos: servicosModel})
    }
}

module.exports = homeController