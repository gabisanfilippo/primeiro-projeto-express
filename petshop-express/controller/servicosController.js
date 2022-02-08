var modelServicos = require('../model/servico.json')

const servicosController = {
    servicos: (req,res) => {
        res.send(modelServicos)
    }
}

module.exports = servicosController