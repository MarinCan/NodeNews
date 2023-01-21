const express = require('express');
const axios = require('axios');
const { request } = require('../app');
const router = express.Router();



/* GET posts page. */
router.get('/', async (req, res, next) => {
    // res.render('news/posts.ejs')
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    // console.log(response.data)
    res.render('news/posts.ejs', {
        posts: response.data
    })
});

module.exports = router;
