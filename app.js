//IMPORT
require('app-module-path').addPath(__dirname);
const express = require('express')
const app = express()
var http = require("http");
const port = 8080
const routes = require('./routes/index');

//API DOC
app.use('/api-docs', express.static('api-docs'));

//LIB DOC
app.use('/lib-docs', express.static('lib-docs'));

//MDEDIA GETTER
app.use('/media', express.static('public/storage'));

//BODY-PARSER FOR REQUEST DATA
var bodyParser = require('body-parser')

//MULTER FOR FORM-DATA AND FILES
var multer = require('multer');

//LOGGER
const logger = require('morgan');
app.use(logger('common'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// MULTER INTEGRATION
app.use(multer({dest:'./uploads/'}).any());

//CONNECT ALL API ROUTE
app.use('/api', routes);

module.exports = app;