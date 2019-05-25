//IMPORT
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user');

//GET ROUTES
router.get('/first', controllers.first);
router.get('/second', controllers.second);

//My API

router.get('/yash',controllers.yash);

//EXPORT ROUTER
module.exports = router;