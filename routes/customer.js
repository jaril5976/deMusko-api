//IMPORT
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/customer');

//POST ROUTES
router.post('/createCustomer',controllers.createCustomer);
router.post('/getCustomers',controllers.getCustomers);

//EXPORT ROUTER
module.exports = router;