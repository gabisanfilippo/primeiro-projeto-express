var express = require('express');
const { mountpath } = require('../app');
var router = express.Router();

const servicosController = require('../controller/servicosController')

router.get('/', servicosController.servicos)

router.get('/cadastro', servicosController.exibirServico)

router.post('/cadastro', servicosController.criarServico)

module.exports = router