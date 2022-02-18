var express = require('express');
var router = express.Router();

const petsController = require('../controller/petsController')

router.get('/', petsController.pets);

router.get('/cadastro', petsController.exibePets)

router.post('/cadastro', petsController.cadastraPets)

router.get('/lista', petsController.listaPets)

module.exports = router;