(function(){
'use strict';

var config = require('config');
var Treasure = require('treasure');


var goldBar = new Treasure({
    name: 'Gold Bar',
    imageUrl: 'gold-bar.png',
    initialPrice: 500
  },
  config
);

goldBar.render();

})();
