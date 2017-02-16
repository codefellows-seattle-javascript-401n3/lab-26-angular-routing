'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Home Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal HOME', () => {
      expect(this.homeCtrl.title).toEqual('HOME');
    });
  });

});
