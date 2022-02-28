var express = require('express');
var router = express.Router();

const petsController = require('../controller/petsController')
const validateCharactersNameMiddleware = require("../Middleware/validateCharactersNameMiddleware")

router.get('/', petsController.pets);

router.get('/cadastro', petsController.exibePets)

router.post('/cadastro', validateCharactersNameMiddleware,petsController.cadastraPets)

router.get('/lista', petsController.listaPets)

module.exports = router;