var express = require('express');
var guests = [{name: 'Alice'}, {name: 'Bob'}, {name:'Charlie'}];

var guestList = {
    allGuests: () => {
        return guests;
    }
}

module.exports = guestList;