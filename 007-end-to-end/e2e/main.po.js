/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {

  	this.title = element(by.model('homeCtrl.card.title'));
  	this.description = element(by.model('homeCtrl.card.description')); 
	this.background = element(by.xpath('//*[@id="input_0"]')); 
	this.textColor = element(by.xpath('//*[@id="input_1"]')); 
	this.addFavorite = element(by.css('#favoriteBtn'));

  	this.directiveTitle = element(by.css('#cardTitle'));
  	this.directiveDescription = element(by.css('#cardDescription'));
  	this.directive = element(by.xpath('//*[@id="card"]'));

  	this.favoriteList = element.all(by.repeater('favorite in homeCtrl.favoriteList'));

};

module.exports = new MainPage();
