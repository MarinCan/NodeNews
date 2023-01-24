const express = require('express');
const { request } = require('../app');
const router = express.Router();
const dbconnection = require('../config/dbconnection')
const connection = dbconnection()


/* GET news page. */
router.get('/', function(req, res, next) {
    // res.send('News!!')

    let num_q = parseInt(req.query.q)
    // console.log("Numero de query:", num_q)
    // console.log("Numero de query:", typeof(num_q))

    let consulta = `SELECT * FROM news LIMIT ${num_q*5}, 5`

    connection.query(consulta, (error, result) => {
        res.render('news/news.ejs', {
            news: result,
            num_q: num_q
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
        res.redirect('/news?q=0')  // PORQUE ?!?!?
    })
});

module.exports = router;
