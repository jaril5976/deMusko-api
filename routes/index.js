const express = require('express');
const guest = require('./guest');
const user = require('./user');
const app = express()

app.use('/guest', guest);
app.use('/user', user);

module.exports = app;