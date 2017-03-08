require('../app/entry.js');
require('angular-mocks');

const angular = require('angular');

describe('controllers', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
      this.signupCtrl = new $controller('SignupController');
      this.homeCtrl = new $controller('HomeController');
    });
  });
  describe('the home controller', () => {
    it('title property should equal "Home Page"', () => {
      expect(this.homeCtrl.title).toBe('Home Page');
    });
  });
  describe('the signup controller', () => {
    it('title property should equal "Signup Page"', () => {
      expect(this.signupCtrl.title).toBe('Signup Page');
    });
  });
  describe('the gallery controller', () => {
    it('title property should equal "Gallery Page"', () => {
      expect(this.galleryCtrl.title).toBe('Gallery Page');
    });
  });
});
