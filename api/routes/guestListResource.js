var express = require('express');
var router = express.Router();

var guestList = require('../public/javascripts/guestList');
var guests;


router.get('/', function(req, res, next) {
    guests = guestList.allGuests()
    res.status(200).json(guests);
});

module.exports = router;