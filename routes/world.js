const NovelCovid = require('novelcovid')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    NovelCovid.all()
        .then((response) => {
            console.log({...response, currentTime: new Date().toString()})
        })
})

router.get('/countries', (req, res) => {
    console.log('this is countries', new Date().toString())
    NovelCovid.countries().then((response) => {
        res.render('home', {info: response})
        console.log(response[0])
    })
})

module.exports = router;