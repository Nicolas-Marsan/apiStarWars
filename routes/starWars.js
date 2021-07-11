var express = require('express');
var router = express.Router();

const starWarsController = require('../controllers/starWarsController');

/* GET users listing. */
router.get('/', starWarsController.home);
router.get('/porAzar', starWarsController.porAzar);
router.post('/porNombre', starWarsController.porNombre);
module.exports = router;
