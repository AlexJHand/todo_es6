// Requires
const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', function () {
    console.log('In Todos get');
    pool.connect(function (err, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM todos;', function (error, result) {
                done();
                if (error) {
                    console.log(error);
                    res.sendStatus(500);
                } else {
                    console.log(result.rows);
                    res.send(result.rows);
                }
            })
        }
    })
})