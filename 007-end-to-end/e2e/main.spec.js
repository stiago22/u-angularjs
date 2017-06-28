'use strict';

describe('The main view', function () {
  var page;

  function fillForm() {
    page.title.sendKeys('Talos Business Card');
    page.description.sendKeys('Talos Business Card Test'); 
    page.background.sendKeys('#a44a4a');
    page.textColor.sendKeys('#a4004a');
  }

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should be right data into directive', function() {
    fillForm();
    expect(page.directiveTitle.evaluate('title').isPresent()).toBe(true);
    expect(page.directiveTitle.evaluate('title')).toEqual('Talos Business Card');
    expect(page.directiveDescription.evaluate('description')).toEqual('Talos Business Card Test');
    expect(page.directive.getCssValue('background-color')).toEqual('rgba(164, 74, 74, 1)');
    expect(page.directive.getCssValue('color')).toEqual('rgba(164, 0, 74, 1)');
  });

  it('should favorite list equal to 1', function () {
    fillForm();
    page.addFavorite.click();
    expect(page.favoriteList.count()).toBeGreaterThan(0);
  });

});
