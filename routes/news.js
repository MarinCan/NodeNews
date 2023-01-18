const express = require('express');
const router = express.Router();
const dbconnection = require('../config/dbconnection')

/* GET news page. */
router.get('/', function(req, res, next) {
    // res.send('News!!')
    const connection = dbconnection()
    connection.query("SELECT * FROM news", (error, result) => {
        res.render('news/news.ejs', {
            news: result
        });
    })
});

module.exports = router;
