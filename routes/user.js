//IMPORT
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user');

//GET ROUTES
router.get('/first', controllers.first);
router.get('/second', controllers.second);

//POST ROUTES

router.post('/fetch_data',controllers.fetch_data);

//EXPORT ROUTER
module.exports = router;