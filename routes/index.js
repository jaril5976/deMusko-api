//IMPORTS
const express = require('express');

//ROUTES IMPORT
const guest = require('./guest');
const user = require('./user');

//EXPRESS OBJECT
const app = express()

//ROUTES INTEGRATION
app.use('/guest', guest);
app.use('/user', user);

//EXPORT APP
module.exports = app;