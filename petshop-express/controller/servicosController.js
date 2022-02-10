var modelServicos = require('../model/servico.json')

const servicosController = {
    servicos: (req,res) => {
        res.render('servicos')
    }
}

module.exports = servicosController