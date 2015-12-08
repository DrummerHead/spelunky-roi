(function(){
'use strict';

require('fastclick')(document.body);

var config = require('config');
var treasureItems = require('treasure-items');

var Treasure = require('treasure-class');
var Consumable = require('consumable-class');
var Accountant = require('accountant-class');
var Announcer = require('announcer-class');
var NumberSelect = require('number-select-class');

var announcer = new Announcer();

new Accountant(
  announcer,
  config
);

treasureItems.forEach(function(treasureItem){
  new Treasure(
    treasureItem,
    announcer,
    config
  ).render();
});


new Consumable({
    name: 'Rope',
    imageUrl: 'rope.png',
    initialPrice: 750
  },
  announcer,
  config
).render();

new Consumable({
    name: 'Bomb',
    imageUrl: 'bomb.png',
    initialPrice: 750
  },
  announcer,
  config
).render();


new NumberSelect({
  id: 'area',
  number: 1
  },
  announcer
).render(config.areaSelectElement);

new NumberSelect({
    id: 'level',
    number: 1
  },
  announcer
).render(config.levelSelectElement);


})();
