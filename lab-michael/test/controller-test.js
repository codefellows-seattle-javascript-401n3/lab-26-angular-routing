// require('../../app/index.js');
// require('angular-mocks');

const angular = require('angular');

describe('App Controllers', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
  });

  describe('Home Controller', () => {
    beforeEach(() => {
      angular.mock.inject($controller => {
        this.homeCtrl = new $controller('HomeController');
      });
    });

    it('should have a title property', () => {
      expect(this.homeCtrl.title).toBe('Welcome to the HomePage');
    });
  });

  describe('Signup Controller', () => {
    beforeEach(() => {
      angular.mock.inject($controller => {
        this.signupCtrl = new $controller('SignupController');
      });
    });

    it('should have a title property', () => {
      expect(this.signupCtrl.title).toBe('Welcome to the Signup Page');
    });
  });
  describe('Gallery Controller', () => {
    beforeEach(() => {
      angular.mock.inject($controller => {
        this.galleryCtrl = new $controller('GalleryController');
      });
    });

    it('should have a title property', () => {
      expect(this.galleryCtrl.title).toBe('Welcome to the Gallery Page');
    });
  });


})
