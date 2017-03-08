'use strict';

require('../app/entry.js');
require('angular-mocks')

var angular = require('angular');

describe('Gallery Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('title property', () => {
    it('title property should equal Gallery', () => {
      expect(this.galleryCtrl.title).toBe('Gallery');
    });
  });

});
