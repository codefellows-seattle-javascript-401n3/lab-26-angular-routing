'use strict';

require('../../app/entry');
require('angular-mocks');

const angular = require('angular');

describe('testing HomeController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  it('should have a set title', () => {
    expect(this.homeCtrl.title).toBe('This is the home page');
  });
});
