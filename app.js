//IMPORT
const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes/index');

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

// MULTER INTEGRATION

app.use(multer({dest:'./uploads/'}).any());

//CONNECT ALL API ROUTE
app.use('/api', routes);

//SERVER PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))