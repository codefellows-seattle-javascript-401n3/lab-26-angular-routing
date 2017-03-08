require('../app/entry.js');
require('angular-mocks');
let angular = require('angular');

describe('gallery controller', function() {

  let galleryCtrl = null;

  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('initial properties', function() {
    it('it should have the title sign up', function() {
      expect(galleryCtrl.title).toBe('gallery');
    });
  });

});