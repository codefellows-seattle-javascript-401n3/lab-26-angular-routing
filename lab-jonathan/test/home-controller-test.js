'use strict';

require('../app/entry.js');
require('angular-mocks')
var angular = require('angular');

describe('Home Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('title property', () => {
    it('title property should equal Home', () => {
      expect(this.homeCtrl.title).toBe('Home');
    });
  });

});
