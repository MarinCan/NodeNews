const express = require('express');
const { request } = require('../app');
const router = express.Router();
const dbconnection = require('../config/dbconnection')
const connection = dbconnection()


/* GET news page. */
router.get('/', function(req, res, next) {
    // res.send('News!!')
    connection.query("SELECT * FROM news", (error, result) => {
        res.render('news/news.ejs', {
            news: result
        });
    })
});

router.post('/', function(req, res, next) {
    
    // console.log(req.body)  // --> BUENO HACERLO PARA SABER QUE FUNCIONA ANTES DE SEGUIR
    const {title, news} = req.body
    connection.query("INSERT INTO news SET ?", {
        title,
        news
    }, (error, result) => {
        res.redirect('/news')
    })
});

module.exports = router;
