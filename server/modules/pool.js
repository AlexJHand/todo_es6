var Pool = require('pg').Pool;

module.exports = new Pool({
    database: 'es6-todo'
});