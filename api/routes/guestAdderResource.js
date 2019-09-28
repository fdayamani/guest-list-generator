var express = require('express');
var router = express.Router();

var guestList = require('../public/javascripts/guestList');

router.post('/', (req, res, next) => {
    guestList.add(req.body)
    res.status(200).send('Guest added!');
});

module.exports = router;