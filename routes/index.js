//IMPORTS
const express = require('express');

//ROUTES IMPORT
const guest = require('./guest');
const user = require('./user');
const customer = require('./customer');

//EXPRESS OBJECT
const app = express()

//ROUTES INTEGRATION
app.use('/guest', guest);
app.use('/user', user);
app.use('/customer', customer);

//EXPORT APP
module.exports = app;