(function(){
'use strict';

var config = require('config');

var Treasure = require('treasure-class');
var Consumable = require('consumable-class');
var Accountant = require('accountant-class');

var treasureItems = require('treasure-items');

var accountant = new Accountant(config);


treasureItems.forEach(function(treasureItem){
  treasureItem.instance = new Treasure(
    treasureItem,
    accountant,
    config
  ).render();
});


new Consumable({
    name: 'Rope',
    imageUrl: 'rope.png',
    initialPrice: 750
  },
  accountant,
  config
).render();

new Consumable({
    name: 'Bomb',
    imageUrl: 'bomb.png',
    initialPrice: 750
  },
  accountant,
  config
).render();


})();
