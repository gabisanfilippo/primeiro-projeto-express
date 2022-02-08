var express = require('express');
var router = express.Router();
const petsController = require('../controller/petsController')
const servicosController = require('../controller/servicosController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pets', petsController.pets);

router.get('/servicos', servicosController.servicos)

module.exports = router;
