var express = require('express');
var guests = [];

var guestList = {
    allGuests: () => {
        return guests;
    },
    add: (guest) => {
        guests.push({name: guest.name})
    }
}

module.exports = guestList;