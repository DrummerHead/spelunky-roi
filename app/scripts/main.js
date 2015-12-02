(function(){
'use strict';

var config = require('config');
var Treasure = require('treasure');
var Consumable = require('Consumable');
var Accountant = require('accountant');

var accountant = new Accountant();


var goldBar = new Treasure({
    name: 'Gold Bar',
    imageUrl: 'gold-bar.png',
    initialPrice: 500
  },
  accountant,
  config
);

var rubyLarge = new Treasure({
    name: 'Large Ruby',
    imageUrl: 'ruby-large.png',
    initialPrice: 1600
  },
  accountant,
  config
);

var nuggetSmall = new Treasure({
    name: 'Small Gold Nugget',
    imageUrl: 'nugget-small.png',
    initialPrice: 100
  },
  accountant,
  config
);

var rope = new Consumable({
    name: 'Rope',
    imageUrl: 'rope.png',
    initialPrice: 750
  },
  accountant,
  config
);

var bomb = new Consumable({
    name: 'Bomb',
    imageUrl: 'bomb.png',
    initialPrice: 750
  },
  accountant,
  config
);
/*
var  = new Treasure({
    name: '',
    imageUrl: '.png',
    initialPrice:
  },
  accountant,
  config
);
*/

goldBar.render();
rubyLarge.render();
nuggetSmall.render();

bomb.render();
rope.render();

})();
