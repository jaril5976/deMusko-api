//IMPORT
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user');

//POST ROUTES
router.post('/register',controllers.register);
router.post('/login',controllers.login);
router.post('/manan',controllers.manan);

//EXPORT ROUTER
module.exports = router;