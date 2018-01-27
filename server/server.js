// Requires 
const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index.router');
const todo = require('./routes/todo.router');
const port = process.env.PORT || 4501;

// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./server/public'));

// Routes
app.use('/todo', todo);
app.use('/*', index);

// Listener
app.listen(port, function () {
    console.log('App listening on port', port);
})