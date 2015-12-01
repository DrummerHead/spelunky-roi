(function(window, document, undefined){
'use strict';

var magia = require('app/coso');
magia();

var TREASURE_LIST = document.querySelector('#treasure-list');
var TREASURE_PATH = '/images/treasure/'

var Treasure = function(name, imageUrl, initialPrice){
  this.name = name;
  this.imageUrl = TREASURE_PATH + imageUrl;
  this.initialPrice = initialPrice;

  this.liElement = document.createElement('li');
  this.imgElement = document.createElement('img');

  this.imgElement.setAttribute('src', this.imageUrl);
  this.imgElement.setAttribute('alt', this.name);
  this.liElement.appendChild(this.imgElement)

  this.imgElement.addEventListener('click', this.handleClick.bind(this));

};

Treasure.prototype.render = function(){
  TREASURE_LIST.appendChild(this.liElement);
}

Treasure.prototype.handleClick = function(ev){
  console.log(ev);
  console.log(this);
  console.log('I be clicked ' + this.name);
}

var goldBar = new Treasure('Gold Bar', 'gold-bar.png', 500);
goldBar.render();

})(window, document)
