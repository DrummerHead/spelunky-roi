(function(){
'use strict';

var config = require('config');
var treasureItems = require('treasure-items');

var Treasure = require('treasure-class');
var Consumable = require('consumable-class');
var Accountant = require('accountant-class');
var NumberSelect = require('number-select-class');


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



var areaSelect = new NumberSelect(0);
var levelSelect = new NumberSelect(0);
areaSelect.render(config.areaSelectElement);
levelSelect.render(config.levelSelectElement);







})();
