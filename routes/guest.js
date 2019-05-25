//IMPORTS
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/guest');

//GET ROUTES
router.get('/first', controllers.first);
router.get('/second', controllers.second);

//POST ROUTES
router.post('/copy', controllers.copy);

//EXPORT ROUTER
module.exports = router;