'use strict';

require('../app/entry');
require('angular-mocks');
const angular = require('angular');
// const expect = require('karma-jasmine');

describe('testing galleryCtrl', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  it('should return the gallery title', () => {
    expect(this.galleryCtrl.title).toBe('Gallery data-bound');
  });
});
