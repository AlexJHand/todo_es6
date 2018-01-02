// Requires 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index.router');
const port = process.env.PORT || 4501;

// Middleware 
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/*', index);

// Listener
app.listen(port, function () {
    console.log('App listening on port', port);
})