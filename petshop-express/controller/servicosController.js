var modelServicos = require('../model/servico.json')

const servicosController = {
    servicos: (req,res) => {
        res.render('servicos',{listaServicos: modelServicos})
    },
    exibirServico: (req,res) => {
        res.render('serCadastro')
    },
    criarServico: (req,res) => {
        
        let servico = req.body
        modelServicos.push(servico)
        res.redirect('/')
    },
    servicosId: (req,res) => {
        let id = req.params.id
        let servico = modelServicos.find(s => s.id == id)
        res.render('servicosId', {servico})
    }
}

module.exports = servicosController