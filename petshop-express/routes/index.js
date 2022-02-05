var express = require('express');
var router = express.Router();
const petsController = require('../controller/petsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pets', petsController.pets);

module.exports = router;
