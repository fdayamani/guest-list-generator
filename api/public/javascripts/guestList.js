var express = require('express');
var guests = [];

var guestList = {
    allGuests: () => {
        return guests;
    },
    addGuest: (guest) => {
        guests.push({name: guest.name})
    }
}

module.exports = guestList;