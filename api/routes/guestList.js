var express = require('express');
var router = express.Router();

var guests = [{name: 'Alice'}, {name: 'Bob'}, {name:'Charlie'}];

router.get('/', function(req, res, next) {
    res.status(200).json(guests);
});

module.exports = router;