var express = require('express');
var guests = [{name: 'Alice'}, {name: 'Bob'}, {name:'Charlie'}];

var guestList = {
    allGuests: () => {
        return guests;
    },
    addGuest: (guest) => {
        guests.push(guest)
    }
}

module.exports = guestList;