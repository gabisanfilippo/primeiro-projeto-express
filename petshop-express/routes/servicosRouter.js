var express = require('express');
const { mountpath } = require('../app');
var router = express.Router();

const servicosController = require('../controller/servicosController')
const validateCharactersNameMiddleware = require("../Middleware/validateCharactersNameMiddleware")
const validateEmptyNomeDescricaoPrecoMiddleware = require("../Middleware/validateEmptyNomeDescricaoPrecoMiddleware")
const validateCharactersDescricaoMiddleware = require("../Middleware/validateCharactersDescricaoMiddleware")
const validateNumberPrecoMiddleware = require("../Middleware/validateNumberPrecoMiddleware")

router.get('/', servicosController.servicos)

router.get('/cadastro', servicosController.exibirServico)
router.post('/cadastro', validateEmptyNomeDescricaoPrecoMiddleware, validateCharactersNameMiddleware, validateNumberPrecoMiddleware, validateCharactersDescricaoMiddleware, servicosController.criarServico)

router.get('/:id', servicosController.servicosId)

module.exports = router