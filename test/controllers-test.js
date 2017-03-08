require('../app/entry.js');
require('angular-mocks');

let angular = require('angular');

describe('GalleryController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.GalleryCtrl = new $controller('GalleryController')
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.GalleryCtrl);
      expect(this.GalleryCtrl.title).toEqual('I am the GalleryController, this is my title.');
    });
  });
});

describe('HomeController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.HomeCtrl = new $controller('HomeController')
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.HomeCtrl);
      expect(this.HomeCtrl.title).toEqual('I am the HomeController, this is my title.');
    });
  });
});

describe('SignupController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.SignupCtrl = new $controller('SignupController')
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.HomeCtrl);
      expect(this.SignupCtrl.title).toEqual('I am the SignupController, this is my title.');
    });
  });
});
