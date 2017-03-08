'use strict';

require('./../app/entry');
require('angular-mocks');

var angular = require('angular');

describe('testing GalleryController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('GalleryController');
    });
  });

  it('should have a set title', () => {
    expect(this.galleryCtrl.title).toBe('This is the home page');
  });
});
