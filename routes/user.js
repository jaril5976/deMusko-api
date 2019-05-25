var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user');

router.get('/first', controllers.first);
router.get('/second', controllers.second);

module.exports = router;