var express = require('express');
var router = express.Router();


const homeController = require('../controller/homeController')
const sobreController = require('../controller/sobreController')

/* GET home page. */
router.get('/', homeController.home);

router.get('/sobre', sobreController.sobre)

module.exports = router;
