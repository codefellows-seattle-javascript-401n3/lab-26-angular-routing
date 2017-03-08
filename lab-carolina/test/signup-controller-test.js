'use strict';

require('../../app/entry');
require('angular-mocks');

var angular = require('angular');

describe('testing SignController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('signupController');
    });
  });

  it('should have a set title', () => {
    expect(this.signupCtrl.title).toBe('This is the home page');
  });
});
