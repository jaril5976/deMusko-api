//IMPORT
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user');

//GET ROUTES
router.get('/first', controllers.first);
router.get('/second', controllers.second);

//POST ROUTES

router.post('/fetch_data',controllers.fetch_data);
router.post('/loop_sample',controllers.loop_sample);
router.post('/add_todo',controllers.add_todo);

//EXPORT ROUTER
module.exports = router;