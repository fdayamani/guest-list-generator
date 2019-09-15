var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This will be the guest list');
});

module.exports = router;