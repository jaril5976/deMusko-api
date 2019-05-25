const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes/index');

//  Connect all our routes to our application
app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))