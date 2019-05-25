//IMPORT
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user');

//GET ROUTES
router.get('/first', controllers.first);
router.get('/second', controllers.second);
router.get('/mitul', controllers.mitul);


//EXPORT ROUTER
module.exports = router;