var express = require('express');
var router = express.Router();
var controllers = require('../controllers/guest');

router.get('/first', controllers.first);
router.get('/second', controllers.second);

module.exports = router;