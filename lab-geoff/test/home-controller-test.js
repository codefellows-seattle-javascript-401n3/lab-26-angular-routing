require('../app/entry.js');
require('angular-mocks');
let angular = require('angular');

describe('home controller', function() {

  let homeCtrl = null;

  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      homeCtrl = new $controller('HomeController');
    });
  });

  describe('initial properties', function() {
    it('it should have the title sign up', function() {
      expect(homeCtrl.title).toBe('home');
    });
  });

});