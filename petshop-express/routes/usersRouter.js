var express = require('express');
var router = express.Router();

const usuarioController = require('../controller/usuarioController')
const contatoController = require('../controller/contatoController')

router.get('/cadastro', usuarioController.cadastro)

router.get('/contato', contatoController.contato)

router.get('/login', usuarioController.login)

module.exports = router;
