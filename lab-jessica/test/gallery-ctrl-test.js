'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Gallery Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal GALLERY', () => {
      expect(this.galleryCtrl.title).toEqual('GALLERY');
    });
  });

});
