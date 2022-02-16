var express = require('express');
var router = express.Router();

const petsController = require('../controller/petsController')
const servicosController = require('../controller/servicosController')
const usuarioController = require('../controller/usuarioController')
const contatoController = require('../controller/contatoController')
const homeController = require('../controller/homeController')
const sobreController = require('../controller/sobreController')

/* GET home page. */
router.get('/', homeController.home);

router.get('/pets', petsController.pets);

router.get('/servicos', servicosController.servicos)

router.get('/cadastro', usuarioController.cadastro)

router.get('/contato', contatoController.contato)

router.get('/login', usuarioController.login)

router.get('/sobre', sobreController.sobre)

router.get('/ser/cadastro', servicosController.exibirServico)

router.post('/ser/cadastro', servicosController.criarServico)

router.get('/pets/cadastro', petsController.exibePets)

router.post('/pets/cadastro', petsController.cadastraPets)

module.exports = router;
