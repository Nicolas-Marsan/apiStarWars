var express = require('express');
var router = express.Router();

const starWarsController = require('../controllers/starWarsController');

/* GET users listing. */
router.get('/', starWarsController.home);

module.exports = router;
