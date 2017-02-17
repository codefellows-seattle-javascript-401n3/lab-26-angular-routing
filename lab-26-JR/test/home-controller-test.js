'use strict';

// require('../app/entry');
// require('angular-mocks');
const angular = require('angular');
// const expect = require('karma-jasmine');

describe('testing homeCtrl', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  it('should return the homeCtrl title', () => {
    expect(this.homeCtrl.title).toBe('Home data-bound');
  });
});
