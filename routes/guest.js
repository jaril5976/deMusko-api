//IMPORTS
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/guest');

//GET ROUTES
router.get('/first', controllers.first);
router.get('/second', controllers.second);

//EXPORT ROUTER
module.exports = router;