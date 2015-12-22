(function(){
'use strict';

/**
 * @file Starts the application
 * @require module:fastclick
 */

require('fastclick')(document.body);

var config = require('config');
var treasureItems = require('treasure-items');

var Treasure = require('treasure-class');
var Consumable = require('consumable-class');
var Accountant = require('accountant-class');
var Announcer = require('announcer-class');
var NumberSelect = require('number-select-class');
var LevelSelect = require('level-select-class');

var announcer = new Announcer();

var accountant = new Accountant(
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


var numberSelectArea = new NumberSelect({
    id: 'area',
    number: 1,
    min: 1,
    max: 5
  },
  announcer
).render(config.areaSelectElement);

var numberSelectLevel = new NumberSelect({
    id: 'level',
    number: 1,
    min: 1,
    max: 4
  },
  announcer
).render(config.levelSelectElement);

new LevelSelect(
  numberSelectArea,
  numberSelectLevel,
  config
);


document.querySelector('#reset').addEventListener('click', function(){
  accountant.resetAllAmounts();
});


})();
