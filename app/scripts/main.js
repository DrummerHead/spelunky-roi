(function(){
'use strict';

var config = require('config');
var treasureItems = require('treasure-items');

var Treasure = require('treasure-class');
var Consumable = require('consumable-class');
var Accountant = require('accountant-class');
var Announcer = require('announcer-class');
var NumberSelect = require('number-select-class');

var accountant = new Accountant(config);
var announcer = new Announcer();

treasureItems.forEach(function(treasureItem){
  treasureItem.instance = new Treasure(
    treasureItem,
    accountant,
    announcer,
    config
  ).render();
});


new Consumable({
    name: 'Rope',
    imageUrl: 'rope.png',
    initialPrice: 750
  },
  accountant,
  announcer,
  config
).render();

new Consumable({
    name: 'Bomb',
    imageUrl: 'bomb.png',
    initialPrice: 750
  },
  accountant,
  announcer,
  config
).render();



var areaSelect = new NumberSelect({id: 'area', number: 1}, announcer);
var levelSelect = new NumberSelect({id: 'level', number: 1}, announcer);
areaSelect.render(config.areaSelectElement);
levelSelect.render(config.levelSelectElement);







})();
