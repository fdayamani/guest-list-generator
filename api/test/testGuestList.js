var assert = require('assert');
var should = require('should');
var guestList = require('../public/javascripts/guestList');

describe('Guest List', function() {
    it('should contain a guest that has been added to it', function() {
      guestList.add({name: "Fatema"});
      guestList.allGuests().should.containEql({name: "Fatema"});
    });
});